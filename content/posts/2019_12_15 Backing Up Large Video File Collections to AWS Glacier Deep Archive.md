---
title: Backing Up Large Video File Collections to AWS Glacier Deep Archive
date: 2019-12-15
tags:
  - tech
  - CommunityMedia
  - TV
  - Television
categories:
  - The Station
draft: false
---
## Part 1 – Why AWS Glacier Deep Archive?
Backing up large collections of raw video footage and edit masters remains a real challenge for anyone working in the video production world. As the Executive Director of a local community media station, I’m responsible for maintaining a Synology NAS which currently holds 55TB of final edit master videos. The idea of incorporating “Cloud Storage” into our backup procedures has always interested me, but the expense has held me back.

Until recently, our backup was rudimentary. We utilized Archive.org, which is a wonderful organization operating an online digital library of print, audio, and video works. They allow users to upload high-quality MPG2 files to be added to the collection and unlike YouTube, they offer the ability to download your original upload at any time.

For us, this was a win-win. [Archive.or](https://web.archive.org/web/20250806175314/https://www.archive.org/)[g](https://web.archive.org/web/20250806175314/https://www.archive.org/) provided a FREE way for us to share our content, preserve it for the future, and have an offsite backup if we ever needed it.

We love the Archive and will continue to support them. The main goal of keeping our content open and available to the public for decades to come is just amazing.

That said, the Archive is NOT a backup solution, but given our budget constraints, it was a quasi backup. We frequently said, “If the Synology NAS went up in flames, at least the videos would not be lost forever”…but the recovery process might take that long.

When I learned about Amazon’s **Glacier Deep Archive** service earlier this year I was instantly intrigued and thought this might finally be a perfect solution for our needs. At “$1 per TERABYTE per month” they certainly had my attention.

Glacier Deep Archive is a new product offering by Amazon Web Services (AWS) that falls under their S3 Storage product line. Deep Archive is the lowest cost storage class. When Amazon released the new storage class on March 27, 2019 their press release highlighted several use cases including media and entertainment companies:

>“there are organizations, such as media and entertainment companies, that want to keep a backup copy of core intellectual property. These datasets are often very large, consisting of multiple petabytes, and yet typically only a small percentage of this data is ever accessedâ€”once or twice a year at most. To retain data long-term, many organizations turn to on-premises magnetic tape libraries or offsite tape archival services. However, maintaining this tape infrastructure is difficult and time-consuming; tapes degrade if not properly stored and require multiple copies, frequent validation, and periodic refreshes to maintain data durability.”
>
[Amazon Web Services Press Release](https://web.archive.org/web/20250806175314/https://press.aboutamazon.com/news-releases/news-release-details/aws-announces-general-availability-amazon-s3-glacier-deep), March 2019

There is some “fine print” to be aware of, although none of it’s a real concern for me. There are additional charges for recovering your data and the data is not instantly available, retrieval time is up to 12hrs, but that’s the trade-off for the low cost. Again, not a big deal for my use case. You can check out the [Amazon S3 Website](https://web.archive.org/web/20250806175314/https://aws.amazon.com/s3/storage-classes/) for more specifics. The whole idea of Glacier Deep Archive is LONG TERM storage, files that you need to keep and don’t want to lose but may never actually need to access if your local files remain intact.

For media professionals, I see Glacier Deep Archive as a great tool for:

- **Wedding and Event Videographers** who want to backup raw footage, master files, and other assets.
- **Community Media Stations** (PEG Access) looking to backup programs and raw footage.
- **Local Production Companies**, again for all the same reasons.

Before I share my workflow and experiences with AWS Glacier Deep Archive let’s jump back for a second and talk about backup best practices for just a minute.

### 3-2-1 Backup

Peter Krogh’s 3-2-1 Backup Strategy is a well-known best practice adopted by IT professionals and the government. The 3-2-1 concept is rather simple:

**3. Keep at least three copies of your data**  
The original copy and two backups.

**2. Keep the backed-up data on two different storage types**  
Multiple copies prevent you from losing the only copy of your data. Multiple locations ensure that there is no single point of failure and your data is safe from disasters such as fires and floods.

**1. Keep at least one copy of the data offsite**  
Even if you have two copies on two separate storage types but both are stored onsite, a local disaster could wipe out both of them. Keep a third copy in an offsite location, like the cloud.

With the 3-2-1 Backup goals in mind, I’d like to share my experiences with AWS Deep Archive in Part 2 of this blog post. I’ll share the workflow I’ve established after running into some issues initially.

Keep in mind, I’m new to the AWS platform and I’m a media professional, not an IT genius. I am a tech geek and enjoy the challenge of learning new things. If you have any feedback, tips, or suggestions please feel free to post in the comments.

**Part 2 – Backup to AWS Glacier Deep Archive using CLI  
_Coming Soon_**