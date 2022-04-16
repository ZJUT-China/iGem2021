// 下面这句注释的作用是防止jshint插件误报
/* jshint esversion: 6 */
$(function () {
    "use strict";
    // $.getJSON("../json/member.json", (memberList, textStatus) => {
        // console.log(jqXHR);
        var memberList = {
            "leader": [{
                "name": "Lianjie Sha",
                "group": "dry",
                "role": "leader",
                "message": "Mainly responsible for mathematical modelling. Also involved in some of the artwork and device design work.",
                "attribution": "Mainly responsible for mathematical modelling. Also involved in some of the artwork and device design work.",
                "photourl": "https://2021.igem.org/wiki/images/b/be/T--ZJUT-China--slj.jpg"
            }, {
                "name": "Xia Yao",
                "group": "wet",
                "role": "leader",
                "message": "I am Yao Xia, the student leader of the wet lab. Taking charge of almost everything about experiments lets me gain a nickname called \"boss\". I hope I can learn more skills and knowledges in iGEM and success in the final experiment.",
                "attribution": "As the student leader of the wet lab, I’m in charge of all parts of the experiment. In the dry lab, I carried out some measurements simultaneously. The project was divided into different small groups, and the cleavage effect of the CRISPR/Cas9 system in vitro was my responsibility.",
                "photourl": "https://2021.igem.org/wiki/images/0/05/T--ZJUT-China--yx.jpg"
            }, {
                "name": "Xiaoqi Wang",
                "group": "wet",
                "role": "leader",
                "message": "Hello,this is Xiaoqi speaking. \nThis year, I'm the team leader and a member of the wet group as well. It's definitely a huge challenge for me. Thankfully, I encountered the best team members in the world and together we made a super strong squad. Everyday as an iGEMer is delightful and fruitful.",
                "attribution": "Mainly responsible for the overall management of the team, the arrangement and distribution of tasks. In the wet group, I mainly organized the experiments of gene circuits and analyzed the results.  ",
                "photourl": "https://2021.igem.org/wiki/images/6/66/T--ZJUT-China--wxq.jpg"
            }, {
                "name": "Xinyuan Ying ",
                "group": "dry",
                "role": "leader",
                "message": "I am Ying Xinyuan from Zhejiang University of Technology, majoring in communication engineering. I am good at making software and hardware, and I am mainly responsible for hardware devices in the team.",
                "attribution": "I\u2019m responsible for the circuit design and production of hardware devices, single-chip code writing and software production.",
                "photourl": "https://2021.igem.org/wiki/images/3/35/T--ZJUT-China--yxy.jpg"
            }, {
                "name": "Mingwei Zhang",
                "group": "hp",
                "role": "leader",
                "message": "Talkative and keeping a strong desire of communication.",
                "attribution": "Contacting and visiting a doctor and patients.\nWorking the official account number of Bilibili and WeChat.\nReorganizing every articles delivered at the mass media.\nContacting and communicating with some biological companies.\nBuidling the collaboration of other teams.\nScheming activities which elevates the fame of biology and\nour project.",
                "photourl": "https://2021.igem.org/wiki/images/a/a1/T--ZJUT-China--zmw.jpg"
            }],
            "wetgroup": [{
                "name": "Xue Li",
                "group": "wet",
                "role": "member",
                "message": "I'm Xue Li,a member of Wet group.Although I encountered many difficulties during the experiment,which were solved one by one with the help of my teammates.I enjoy the process of working towards the same goal together.I believe that we are the best forever!",
                "attribution": "Mainly responsible for constructing Cas9 plasmid and verifying the cleavage effect of CRISPR / Cas9 system. In addition, I also participated in CCIC，completed wiki and papers with my excellent teammates.",
                "photourl": "https://2021.igem.org/wiki/images/2/25/T--ZJUT-China--lx.jpg"
            }, {
                "name": "Chunyi Yang",
                "group": "wet",
                "role": "member",
                "message": "Like a bubble, gorgeous and dreamy men, though dead, do not die.",
                "attribution": "construct plasmid(P28a-tetO1-deGFP,CXCL9 mRNA and three gRNAs),verify the cutting activity of gRNA and Cas9.",
                "photourl": "https://2021.igem.org/wiki/images/9/9a/T--ZJUT-China--ycy.jpg"
            }, {
                "name": "Jia Luo",
                "group": "wet",
                "role": "member",
                "message": "My name is Luo Jia, in this IGEM competition as a freshman IGEM newcomer. I participated in experiments, research, interviews and other activities, which benefited me a lot. At the same time, I also hope that I can create value for the team.",
                "attribution": "As a member of the wet group, I was mainly responsible for the experimental part of partially constructing gRNA and partially constructing plasmid. In addition, I participated in CCIC and completed the poster meeting together with my excellent teammates. At the same time, as a member of HP, I also participated in the compilation of some questionnaires and offline interviews with doctors and patients.",
                "photourl": "https://2021.igem.org/wiki/images/c/cf/T--ZJUT-China--lj.jpg"
            }, {
                "name": "Jianwei Fang",
                "group": "wet",
                "role": "member",
                "message": "I'm a chemical engineering student. I am very interested in the knowledge of biology. Participated in this competition, learned a lot about genetic knowledge. I was in the wet group, responsible for experimental design and development. Although I have many blind spots in knowledge, I have been learning and catching up with my classmates majoring in biology, hoping to learn more knowledge.",
                "attribution": "Participated in the group meeting within the group, and participated in the component experiment related content. Although there are many knowledge blind spots, but has been catching up with everyone. And enter the laboratory to do experiments with my classmates. Also responsible for laboratory daily health supervision.",
                "photourl": "https://2021.igem.org/wiki/images/d/d1/T--ZJUT-China--fjw.jpg"
            }, {
                "name": "Yifan Zheng",
                "group": "wet",
                "role": "member",
                "message": "I'm Yifan Zheng, a member of the wet group. In the process of preparing for the competition, I do everything the best of my ability.Enjoying every moment, even difficult ones.I believe our team can achieve a satisfactory result.",
                "attribution": "Mainly responsible for the CRISPR/Cas9 group of constructing and verifying plasmids, which used in verification of Escherichia coli and Cell-Free system.",
                "photourl": "https://2021.igem.org/wiki/images/1/15/T--ZJUT-China--zyf.jpg"
            }, {
                "name": "Fangqian Huang",
                "group": "wet",
                "role": "member",
                "message": "I am Fangqian Huang,one of the members of the wet group who came to IGEM with enthusiasm for experiments..IGEM has brought me a lot of harvest.For experimental skills, I have mastered the experimental skills used in our experiment from knowing nothing at the beginning.  I also gained many like-minded partners and enjoyed doing experiments and discussing problems with them. We solved a lot of experimental problems together.All these have enriched my practical ability.I was lucky to attend IGEM this year and meet such a warm group of people. In a word, I love my team.Unconsciously. The project is coming to an end, but there will be a reunion.",
                "attribution": "Mainly responsible for the CRISPR/Cas9 group of constructing and verifying plasmids, which used in verification of Escherichia coli and Cell-Free system.",
                "photourl": "https://2021.igem.org/wiki/images/5/5b/T--ZJUT-China--hfq.jpg"
            }, {
                "name": "Wenfeng Cai",
                "group": "wet",
                "role": "member",
                "message": "My name is Wenfeng Cai, a memer of wetlab and HP group of 2021 ZJUT-IGEM. My partners and me met many difficulties and failed many times in the process of experiment, but we finally overcame the difficulties and achieved success.It was tough, but I was really happy when I made it. I hope our project will be even more successful this year.\n",
                "attribution": "Mainly responsible for the CRISPR/Cas9 group of constructing and verifying plasmids, which used in verification of Escherichia coli and Cell-Free system.",
                "photourl": "https://2021.igem.org/wiki/images/6/6f/T--ZJUT-China--cwf.jpg"
            }, {
                "name": "Yuanhao Xu",
                "group": "wet",
                "role": "member",
                "message": "Exercising while studying",
                "attribution": "Plasmid construction group",
                "photourl": "https://2021.igem.org/wiki/images/1/10/T--ZJUT-China--xyh.jpg"
            }],
            "drygroup": [{
                "name": "Weiwei Qian",
                "group": "dry",
                "role": "member",
                "message": "I\u2019m Weiwei Qian, an undergraduate majoring in bioengineering. I am good at programming, and firmly believe that computer technology can be an effective means of solving biological problems.",
                "attribution": "Responsible for wiki code and WeChat mini program development, while involved in hardware and modeling work.",
                "photourl": "https://2021.igem.org/wiki/images/a/a5/T--ZJUT-China--qww.jpg"
            }, {
                "name": "Xiaoyu Hu",
                "group": "dry",
                "role": "member",
                "message": "Hello,I'm Xiaoyu Hu, a member of dry group.I'm honored to be part of the team, and I want to seize the chance to explore new things.",
                "attribution": "I'm responsible for art-related work and sometimes working as a back-up.",
                "photourl": "https://2021.igem.org/wiki/images/f/f4/T--ZJUT-China--hxy.jpg"
            }, {
                "name": "Xiangyi Ren",
                "group": "dry",
                "role": "member",
                "message": "Someone who enjoys reading.",
                "attribution": "Mainly involved in parameters measuring and modeling design. ",
                "photourl": "https://2021.igem.org/wiki/images/d/d2/T--ZJUT-China--rxy.jpg"
            }],
            "hpgroup": [{
                "name": "Yetao Zhang",
                "group": "hp",
                "role": "member",
                "message": "An engineering student full of literary feelings and good at communication.\n",
                "attribution": "Mainly responsible for team contact, communication, problem feedback and information collection\uff0cand the production of questionnaire and the conception of interview manuscript.\n\n\n",
                "photourl": "https://2021.igem.org/wiki/images/5/56/T--ZJUT-China--zyt.jpg"
            }, {
                "name": "YiXin Wang",
                "group": "hp",
                "role": "member",
                "message": "A future photographer with a passion for cross-disciplinary learning",
                "attribution": "1.Team contact and communication, problem feedback and information collection of Bio+ Innovation & Entrepreneurship competition.\n2.Design of factual questions for the interview with the doctor\n3.Questionnaire survey and data collection\n4.Video editing",
                "photourl": "https://2021.igem.org/wiki/images/3/36/T--ZJUT-China--wyx.jpg"
            }, {
                "name": "Yuxuan Shen",
                "group": "hp",
                "role": "member",
                "message": "I am an easy-going person and like to make all kinds of friends at work.",
                "attribution": "I have contacted various biopharmaceutical companies several times to collect relevant product information. At the same time, I was also responsible for sorting out the team's reimbursement materials. During the summer vacation, I interviewed doctors in provincial People's Hospital and kidney transplant patients with my team. Moreover, I have assisted in the preliminary preparation of the Bio+ Innovation & Enterpreneurship.",
                "photourl": "https://2021.igem.org/wiki/images/a/a6/T--ZJUT-China--syx.jpg"
            }]
        };
        function create(tag, target, config, content) {
            let element = $(tag, config);
            element.text(content).appendTo(target);
        }

        function showMember(m, selector) {
            for (let i = 0; i < m.length; i++) {
                create("<div>", selector, {
                    class: "member-item col-md-3 col-sm-4 col-xs-6 pull-left"
                });
                create("<div>", `${selector}>.member-item:eq(${i})`, {
                    class: "member-frame"
                });
                create("<img>", `${selector}>.member-item:eq(${i})>.member-frame`, {
                    class: "member-photo",
                    src: m[i].photourl,
                    alt: m[i].name
                });
                create("<div>", `${selector}>.member-item:eq(${i})>.member-frame`, {
                    class: "member-content text-white text-center"
                }, m[i].message);
                create("<div>", `${selector}>.member-item:eq(${i})`, {
                    class: "member-name text-weight-2 text-center text-little"
                }, m[i].name);
            }
        }

        // if (textStatus == "success") {
            showMember(memberList.leader, "#leader");
            showMember(memberList.wetgroup, "#wetgroup");
            showMember(memberList.drygroup, "#drygroup");
            showMember(memberList.hpgroup, "#hpgroup");
        // } else {
        //     alert("Failed to get memberList!!!");
        //     console.error("Failed to get memberList!!!");
        // }
    // });
});