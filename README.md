# git-links-demo

A public, seeded repository for reviewing **Git Links for Jira** on the Atlassian
Marketplace. It exists so a reviewer can exercise the whole path — repository
connection, commit and branch linking, pull request status, the activity view and
smart commits — **without any credential being exchanged**.

Git Links supports anonymous connections to public repositories, so connecting to
this one needs no token, no OAuth app and no account.

## What is in here

The history is deliberately shaped for review, not for running anything:

* Commit messages carry Jira work item keys from the demo site's `PLAT` project
  (`one-atlas-tpda.atlassian.net`), so the app has real keys to match against.
* Several commits use **smart commit** syntax (`#comment`, `#time`) so that path
  can be seen end to end.
* Two branches are open with pull requests against them, and one has been merged,
  so pull request state has all three cases to render.

Nothing here is customer data. Every file, key and message is invented for the
demo site's seeded project.
