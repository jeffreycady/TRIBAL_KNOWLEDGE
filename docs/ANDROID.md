# Android APK

The app is an installable web app (PWA) first. An APK is a packaged version of that web app, built as a **Trusted Web Activity (TWA)**. It loads `https://tk.jcady.org` inside a native shell, so updates to the content arrive without a new APK.

## Option 1: PWABuilder (easiest)

1. Go to https://www.pwabuilder.com and enter `https://tk.jcady.org`.
2. Choose **Android**, then **Generate package**.
3. Download the package. It includes a signed APK or AAB, a signing key, and an `assetlinks.json` file.
4. Keep the signing key safe. It's needed for every future update.
5. Send the `assetlinks.json` contents to the maintainer. It goes at `https://tk.jcady.org/.well-known/assetlinks.json`, which removes the browser bar from the app.

## Option 2: Bubblewrap (command line)

Requires JDK 17 and the Android SDK on your machine.

```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://tk.jcady.org/manifest.json
bubblewrap build
```

The output is an APK and AAB. Bubblewrap prints the SHA-256 fingerprint of the signing key for `assetlinks.json`.

## After the APK

- Test install on a real Android phone (sideload the APK).
- Confirm the browser bar is gone (needs `assetlinks.json` live).
- Confirm offline use: load the app once online, then turn on airplane mode.

## Notes

- Google Play needs a developer account (US$25 one-time). Sideloaded APKs don't.
- The APK shows whatever is at tk.jcady.org. Content updates don't need a new APK. Changes to the app shell do update automatically too, because the TWA loads the live site.
- iPhone has no APK. Install from Safari: Share, then Add to Home Screen.
