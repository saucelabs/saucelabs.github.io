---
title: 'Sunsetting an Open Source project'
description: 'Sunsetting an Open Source project'
draft: false
---

Here you can see the steps that describe how Saucers can sunset or deprecate an open source project. This is a simple process, 
and if you need help going through it, the Open Source Program Office can always give you a hand.

### Is it time to sunset a project?

It often happens that a project needs to be deprecated before you even realize it. An open source might be running into
problems and beginning to be a candidate for sunsetting when:

-   Flow of current and/or new contributors starts to fall off
-   Number of new adopters or current users is dropping considerably
-   Community related activity such as new inquiries or user discussions is reduced significantly
-   No clear direction on the development of the project

If your project has one or more of the previous signs, it might be a good idea to consider alternatives for the future
of the project, one of them being project sunsetting.

### Transferring as an alternative

If the project still has users and community activity but it lacks stable maintainers, there might be people who are
interested in becoming new maintainers. Most of the time they will reach out and ask for the option to get the project
transferred to them, but there is also the option to look for a new maintainer through the project communication channels.

Good ways to find out if someone is interested to maintain and potentially host the project are:

-   Announce in the project `README` that a new maintainer is needed, and where to reach out if someone is interested.
-   Create a GitHub issue and pin it to the repository noting that a maintainer is needed.
-   If possible, use social media to share the announcement and links with information from the repository.

If transferring is a viable option, please reach out to the Open Source team where we help you to figure out the process
with the different internal teams at Sauce Labs.

### Sunsetting

There is usually a time when an open source project ends its life and will not be developed anymore. Here are a
set of guidelines that can help you understand if that is the case for your project and what steps to follow.

#### Get approval

Getting people to agree to sunset and end their project where they have invested time ane effort is not easy. Be sure
to clear all concerns and opinions from your team and involved maintainers. Most of the time, this means reaching out
to the maintainers and the community for acknowledgment and approvement of the decision. Ideally, this should be tracked
on an issue to enable public visibility on the decision process.

Ideally, consensus should be seeked to agree on the decision to sunset the project. However, when the maintainers cannot
agree, the manager(s) from the team(s) who maintain the project need to decide what will happen to the project. If more
than one manager is involved and consensus is not reached, the decision should be escalated until approval or rejection
is reached.

If the project is used by customers as a way to interact with your business, Product managers/owners should also be part
of the decision process stated above.

#### Validate dependencies

Identity where your project is being used or being referenced in order to notify those projects, communities, or package
distribution managers to make them aware about the decision of sunsetting the project. The Linux Foundation’s Open Source 
Security Foundation (OSSF) has developed a [criticality score](https://github.com/ossf/criticality_score) that can help you 
with this validation.

In addition, it is helpful to state clearly in the different package managers (i.e., npm, PyPI, RubyGems, etc.) that 
“this repository will no longer be updated.”

#### Communicate the decision

Share the decision across the different communication channels the project has, such as:

-   `README` file
-   Social media accounts
-   GitHub issue templates
-   Support channels
-   Communinity forums
-   Documentation and website
-   Mailing list

Project users should have a proper time window until the project is sunset. OSPO recommends
at least 1 month between the announcement and archiving the project, and if the project is
used by customers, at least 3 months. However, the specific time window can be decided by
the current maintainers and/or the team that owns the project.

#### Get Reviewed

When you have checked off the previous recommendations checklist and have prepared your code for release, submit a review request to the Open Source team. They will help you set up a GitHub repository in the Sauce Labs organization and sign off on open sourcing your project.

#### Archive the project

Check if the service you use to host your project's code allows you to archive the project. For example, GitHub has an option to archive a repository,
which restricts access to read-only. This is very helpful to avoid any unintended code changes.

### Be clear and formal

The decision of sunsetting an open source project can potentially affect a large amount of users, paid customers, or another
open source project. This is why it is very important to comunicate as early as possible the decision, be formal about the next
steps, set clearly what your users can expect while the project shutsdown, and be open to receive feedback.

Sunsetting is usually the last option project maintainers want to take, but being respectful and transparent with your users
will ease the process, and potentially leave doors open for future collaboration.

_These set of guidelines were inspired by the recommendations created by
[The Linux Foundation](https://www.linuxfoundation.org/resources/open-source-guides/winding-down-an-open-source-project) and
[VMWare](https://blogs.vmware.com/opensource/2022/09/29/when-and-how-to-deprecate-an-open-source-project/)._
