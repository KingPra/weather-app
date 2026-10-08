# Credential cleanup

The user confirmed the old weather projects and theDravia are unused. Embedded keys are replaced with nonfunctional placeholders in source and tracked generated copies. These integrations require reviewed configuration before reuse. Compiled bundle and source-map replacements keep byte lengths unchanged, preserving source-map offsets. Rebuild and refresh content hashes/cache manifests before any future deployment.

This branch removes credential values from current files only. Existing Git history, forks, clones, cached views, and earlier deployments may still contain them. No credentials were tested or revoked, no history was rewritten, and no deployment was performed. The owner must revoke or replace exposed credentials through the provider's authenticated dashboard separately.

Do not merge or deploy this draft until its impact is reviewed. Do not commit replacement secrets, including in generated bundles or source maps.
