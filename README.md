# analytics
The ChurnZero Success Panel and Analytics client

# Install
`npm i https://github.com/churnzero/analytics`

### Want to manually control the version number?
`npm i https://github.com/churnzero/analytics#vX.Y.Z`
Use the latest tag number found here to start: https://github.com/churnzero/analytics/tags

### Using webpack?
`require('script-loader!churnzero-analytics');`

## Integrity verification

Every release publishes SHA-384 and SHA-256 hashes for `dist/analytics.js` on the GitHub Release page so consumers can verify the bundle they downloaded and pin via Subresource Integrity (SRI).

### Where to find the hashes

For any release `vX.Y.Z`, visit `https://github.com/churnzero/analytics/releases/tag/vX.Y.Z`. The release notes include the SRI base64 string ready to copy. The release page also has these downloadable assets:

- `analytics.js.sha384.b64` — SHA-384 in `sha384-<base64>` format, ready to drop into HTML SRI.
- `analytics.js.sha384.hex` — SHA-384 as hex (general-purpose checksum verification).
- `analytics.js.sha256.hex` — SHA-256 as hex.
- `CHECKSUMS.txt` — combined human-readable summary of the above.

### Build provenance (Sigstore)

Each release artifact carries a [Sigstore](https://docs.sigstore.dev/) build-provenance attestation produced by GitHub Actions. The attestation cryptographically links the published bundle to the workflow run that built it, so you can verify the artifact came from this repo and not a tampered source.

Verify with:

```bash
gh attestation verify analytics.js --owner churnzero
```

### Verify what you downloaded

- **Windows:** `certutil -hashfile dist\analytics.js SHA384`
- **Linux/macOS:** `shasum -a 384 -b dist/analytics.js`

Compare to the value in the release page's `analytics.js.sha384.hex` asset. They must match byte-for-byte.

### Pin via Subresource Integrity (SRI)

```html
<script
    src="https://your-cdn.example.com/analytics.js"
    integrity="sha384-<value-from-release-notes>"
    crossorigin="anonymous"
    async></script>
```

### CDN requirements for SRI to work

- The served file must be byte-identical to what was attached to the GitHub Release (no recompression, BOM stripping, or line-ending changes).
- The CDN must return `Access-Control-Allow-Origin` headers compatible with your `crossorigin` attribute, OR be served same-origin.
- Hashes are per-version. They change every release. Re-pin when you upgrade.

### Older releases

Integrity files are published for v2.0.354 and later. For older tags, compute your own hash from the bundled `dist/analytics.js`.
