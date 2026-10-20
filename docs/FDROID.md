# Automated F-Droid repo (signing and hosting)

This sets up an F-Droid repo that updates automatically. You don't install anything on your computer. GitHub Actions signs and indexes the APK, and Cloudflare R2 serves it at `https://fdroid.jcady.org/repo`.

The workflow lives in `.github/workflows/fdroid.yml`. It runs when you push a tag like `v1.0.0`, or when you start it by hand from the Actions tab.

## Steps

### 1. Create two keystores (once)

Create one keystore for signing the app and a second for the F-Droid repo index. Keep both backed up somewhere safe, not only in GitHub. If the repo key is lost, installed users can't receive updates.

Easiest without installing anything: open a GitHub Codespace on this repo (the green Code button, then Codespaces) and run:

```
keytool -genkeypair -v -keystore app.jks -alias tk-app -keyalg RSA -keysize 4096 -validity 10000
keytool -genkeypair -v -keystore repo.jks -alias tk-repo -keyalg RSA -keysize 4096 -validity 10000
base64 -w0 app.jks > app.jks.b64
base64 -w0 repo.jks > repo.jks.b64
```

Download the keystores and their `.b64` files to a password manager or other backup, then delete them from the Codespace.

### 2. Create a Cloudflare R2 bucket

In the Cloudflare dashboard: R2 → Create bucket, named for example `tk-fdroid`. Then:

- Connect a custom domain `fdroid.jcady.org` to the bucket, so it's served publicly.
- R2 → Manage API tokens → create a token with Object Read & Write on that bucket. Save the Access Key ID and Secret Access Key.

### 3. Add GitHub secrets

Repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret | Value |
|---|---|
| `ANDROID_KEYSTORE_B64` | contents of `app.jks.b64` |
| `ANDROID_KEYSTORE_PASSWORD` | password for `app.jks` |
| `ANDROID_KEY_PASSWORD` | key password (often the same) |
| `ANDROID_KEY_ALIAS` | `tk-app` |
| `REPO_KEYSTORE_B64` | contents of `repo.jks.b64` |
| `REPO_KEYSTORE_PASSWORD` | password for `repo.jks` |
| `REPO_KEY_ALIAS` | `tk-repo` |
| `CLOUDFLARE_ACCOUNT_ID` | your Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | from the R2 API token |
| `R2_SECRET_ACCESS_KEY` | from the R2 API token |
| `R2_BUCKET` | `tk-fdroid` |

### 4. Commit the unsigned APK

Upload the PWABuilder unsigned APK to the repo at `android/app-unsigned.apk`. You can do this from the GitHub website (Add file → Upload files). The workflow signs it for you.

### 5. Publish

Push a tag, for example:

```
git tag v1.0.0 && git push origin v1.0.0
```

Or open Actions → Publish F-Droid repo → Run workflow.

When it finishes, `https://fdroid.jcady.org/repo/index-v1.jar` should exist. In the F-Droid app, add the repo `https://fdroid.jcady.org/repo`.

## Notes

- This workflow hasn't been run yet. The first run will probably turn up a small fix, such as the `fdroid` install or the APK path.
- The app is a Trusted Web Activity (package `org.jcady.tk.twa`). The address bar will show until `https://tk.jcady.org/.well-known/assetlinks.json` lists the app's signing certificate fingerprint. Get that fingerprint with `keytool -list -v -keystore app.jks`.
- Web content updates don't need a new APK. Only app wrapper changes do.
