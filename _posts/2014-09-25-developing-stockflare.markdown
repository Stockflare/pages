---
layout: post
title:  "Developing Stockflare"
date:   2014-09-25 13:09:00
categories: blog
author: David Kelley
image: /images/stockflare.png
---

Over the past four months, I have been keeping busy working with my brother [Jonathan Kelley](http://be.net/jonathankelley), [Shane Leonard](http://uk.linkedin.com/in/shaneleonard) and [Mark Stratmann](http://http://mark.stratmann.me/) on building [Stockflare](https://stockflare.com).

We recently released Stockflare to our friends & family, and have received lots of positive and encouraging feedback about how we are presenting complex financial information about worldwide stocks, in a simplistic and digestible format. We store and perform complex analyses on snapshot information for 42,000+ stocks, from huge US Stocks like [Google (GOOGL.O)](https://stockflare.com/stocks/GOOGL.O), to smaller Thai stocks such as [Total Access Communication (DTAC.BK)](https://stockflare.com/stocks/DTAC.BK).

We decided at the earliest stage, to embark on a mission to make investing and understanding complex stock data accessible to everybody, not just the Canary Wharf bank & Wall Street broker. We provide an at-a-glance 5-star rating for every stock for "novices", and an advanced complete breakdown of our ratings, for users that require a deeper understanding.

## So what technology do you use?
Stockflare takes advantage of a number of AWS Cloudformations to deploy our architecture, using a private VPC and logically isolated servers. All of our technology stack is deployed via Cloudformations, (isn't automation beautiful?) We plan on releasing all of our Cloudformations to the public in the future.

All of our applications are ran inside Docker Containers _(got to get that buzz word in right?)_ and we run an internal [Docker builder](https://github.com/rafecolton/docker-builder) system that automagically deploys our applications to our internal Docker Registry (that commits images to S3) when we `git push`. We have a plan to migrate to a [CoreOS](https://coreos.com/) cluster in the future, backed by [Etcd](https://github.com/coreos/etcd) for distributed configuration.

We use a Cassandra cluster backed by Netflix's superb [Priam](https://github.com/Netflix/Priam) to store all of our financial and time-series based data. In addition, we use Elasticsearch to enable the complex filtering, searching and sorting of our 40,000+ stocks in seconds.

Finally, our front-end application is Backbone-powered and deployed as a static website in S3, that is fronted with Cloudfront. SEO you ask? We have developed our own highly-efficient and highly-available snapshot engine (credit to Mark Stratmann), that we plan to fully open source and document in the near future.
