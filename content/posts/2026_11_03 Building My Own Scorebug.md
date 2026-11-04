---
title: Building My Own Scorebug
date: 2026-11-03
tags:
  - video-production
  - broadcast
  - software
categories:
  - The Station
draft: true
---

[Working draft started Nov 3, 2026. Scaffold with facts in place; the writing is yours. Delete the bracketed notes as you go.]

## Opening

[Start with the problem: FCA's sports productions relied on NewBlue Titler Live for the scorebug. What did it cost, what annoyed you, what broke or felt like overkill for a volunteer-run community station? One or two plain sentences on the moment you decided to try building your own.]

## What I built instead

ScoreBug (we call it WebBug in the shop) is not really an app. It is a small web server (Python) and a set of web pages:

- A control panel that runs in any browser on the production network, so more than one operator can have it open.
- An output page that feeds the switcher. On the ATEM it runs as super-black and keys by luma; in OBS it can be a browser source with transparency.
- Tabs for the four jobs: the scorebug itself, full-screen graphics (matchup, halftime, final), lower thirds, and a credits deck that can auto-advance.

[Add a screenshot of the control panel and one of the on-air output here. Images go in the site like your other posts.]

## The design rule that emerged

Declutter. A control only belongs on the live panel if the operator decides it during the game. Everything else moved to setup. [Give one example: the clock source choice, or the per-quarter line score we removed entirely because it caused a double-press failure.]

One honest detail worth explaining: our football clock is not data. It is a camera shot of the stadium scoreboard, squeezed into the graphic through a DVE. The scorebug just has to leave the right hole for it.

## First live tests

- Oct 30, 2026: first live use on youth football. It ran smoothly.
- Varsity football and Monday soccer followed, on the same familiar keying path we used with the old software. No debuts on game day.

[Your best game-day story goes here: what the volunteers thought, what you watched from the director's chair, what you stopped worrying about.]

## What I would tell another small station

- You probably do not need a graphics package. You need a web page, a small server, and the discipline to say no to features.
- Version discipline matters: every build gets a changelog entry and a version number everywhere it is displayed, because on game day nobody remembers which copy is running.
- [Your lesson here.]

## What is next

Soccer, field hockey, and baseball modules are on the roadmap, not built. A CasparCG key-and-fill setup is the someday version. For now, the luma key path works and the crew knows it.

[Closing line: what it means for a one-full-time-employee station to own its tools instead of renting them.]
