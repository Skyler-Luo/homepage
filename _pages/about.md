---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% assign url_params = page.url | split: '?' %}
{% assign query_string = url_params[1] | default: '' %}
{% assign params = query_string | split: '&' %}
{% assign page_lang = 'en' %}

{% for param in params %}
  {% assign kv = param | split: '=' %}
  {% if kv[0] == 'lang' %}
    {% assign page_lang = kv[1] %}
  {% endif %}
{% endfor %}

{% if page_lang == '' or page_lang == nil %}
  {% assign page_lang = 'en' %}
{% endif %}

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="lang-en" style="display: none;">
I am Skyler Luo, an undergraduate student majoring in Intelligent Science and Technology at the School of Software Engineering, Jinling Institute of Technology. My research interests cover machine learning and deep learning, with a specific focus on <strong>computer vision</strong>.
</div>

<div class="lang-zh" style="display: none;">
我是罗晓阳（Skyler Luo），金陵科技学院软件工程学院智能科学与技术专业本科生。我的研究兴趣涵盖机器学习和深度学习，特别专注于<strong>计算机视觉</strong>。
</div>

<span class='anchor' id='-news'></span>

<h1 class="lang-en" style="display: none;">🔥 News</h1>
<h1 class="lang-zh" style="display: none;">🔥 新闻</h1>

<div class="lang-en" style="display: none;">
<ul>
<li><em>2026.07</em>: &nbsp;🎉 Registration of Software Copyright "Scientific Research Achievement Exhibition and Collaboration Management System V1.0".</li>
<li><em>2026.06</em>: &nbsp;🎉 Registration of Software Copyright "iFly Flight Booking System V1.0".</li>
<li><em>2026.04</em>: &nbsp;🎉 Provincial innovation project "Multi-task Traffic Visual Perception Model based on Lightweight Transformer" successfully concluded!</li>
<li><em>2026.01</em>: &nbsp;🎉 Registration of Software Copyright "Transformer-based Multi-task Traffic Visual Perception System V1.0".</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><em>2026.07</em>: &nbsp;🎉 软件著作权「科研成果展示与协作管理系统 V1.0」登记成功。</li>
<li><em>2026.06</em>: &nbsp;🎉 软件著作权「iFly 飞机订票系统 V1.0」登记成功。</li>
<li><em>2026.04</em>: &nbsp;🎉 省级大创项目「基于轻量级Transformer的多任务交通视觉感知模型」顺利结题！</li>
<li><em>2026.01</em>: &nbsp;🎉 软件著作权「基于 Transformer 的多任务交通视觉感知系统 V1.0」登记成功。</li>
</ul>
</div>

<span class='anchor' id='-educations'></span>

<h1 class="lang-en" style="display: none;">📖 Educations</h1>
<h1 class="lang-zh" style="display: none;">📖 教育经历</h1>

<div class="lang-en" style="display: none;">
<ul>
<li><em>2023.09 - Present</em>, B.S. Student in Intelligent Science and Technology, School of Software Engineering, Jinling Institute of Technology</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><em>2023.09 - 至今</em>, 智能科学与技术 本科, 金陵科技学院软件工程学院</li>
</ul>
</div>

<span class='anchor' id='-research-projects'></span>

<h1 class="lang-en" style="display: none;">🔬 Research Projects</h1>
<h1 class="lang-zh" style="display: none;">🔬 研究项目</h1>

<div class="lang-en" style="display: none;">
<ul>
<li><strong>Multi-task Traffic Visual Perception Model based on Lightweight Transformer</strong><br>
<em>Jiangsu Provincial Training Program of Innovation and Entrepreneurship for Undergraduates (Provincial Level Project)</em><br>
<em>May 2025 - Apr. 2026 (Completed)</em>
<ul>
<li>Developed a lightweight Transformer-based model for joint multi-task perception in intelligent traffic environments.</li>
</ul>
</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><strong>基于轻量级Transformer的多任务交通视觉感知模型</strong><br>
<em>江苏省大学生创新创业训练计划项目（省级项目）</em><br>
<em>2025年5月 - 2026年4月（已完成）</em>
<ul>
<li>开发了基于轻量级Transformer的模型，用于智能交通环境中的联合多任务感知。</li>
</ul>
</li>
</ul>
</div>

<span class='anchor' id='-software-copyrights'></span>

<h1 class="lang-en" style="display: none;">💻 Software Copyrights</h1>
<h1 class="lang-zh" style="display: none;">💻 软件著作权</h1>

<div class="lang-en" style="display: none;">
<ul>
<li><strong>Scientific Research Achievement Exhibition and Collaboration Management System V1.0</strong>, <em>Reg. No: 2026SR0833789</em></li>
<li><strong>iFly Flight Booking System V1.0</strong>, <em>Reg. No: 2026SR0667066</em></li>
<li><strong>Transformer-based Multi-task Traffic Visual Perception System V1.0</strong>, <em>Reg. No: 2026SR0047736</em></li>
<li><strong>Django-based Laboratory Progress Management System V1.0</strong>, <em>Reg. No: 2024SR2157775</em></li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><strong>科研成果展示与协作管理系统 V1.0</strong>, <em>登记号: 2026SR0833789</em></li>
<li><strong>iFly 飞机订票系统 V1.0</strong>, <em>登记号: 2026SR0667066</em></li>
<li><strong>基于 Transformer 的多任务交通视觉感知系统 V1.0</strong>, <em>登记号: 2026SR0047736</em></li>
<li><strong>基于 Django 的实验进展管理系统 V1.0</strong>, <em>登记号: 2024SR2157775</em></li>
</ul>
</div>

<span class='anchor' id='-honors-and-awards'></span>

<h1 class="lang-en" style="display: none;">🎖 Honors and Awards</h1>
<h1 class="lang-zh" style="display: none;">🎖 荣誉奖项</h1>

<h2 class="lang-en" style="display: none;">🏆 Competition Awards</h2>
<h2 class="lang-zh" style="display: none;">🏆 竞赛奖项</h2>

<div class="lang-en" style="display: none;">
<ul>
<li><em>2025.09</em> <strong>Third Prize</strong> (Jiangsu Division), Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)</li>
<li><em>2025.08</em> <strong>Second Prize (National Final)</strong>, RoboCom AI &amp; Robotics Competition (RAICOM)</li>
<li><em>2025.07</em> <strong>Second Prize</strong> (Jiangsu Division), RoboCom AI &amp; Robotics Competition (RAICOM)</li>
<li><em>2025.06</em> <strong>Honorable Mention</strong>, 2025 Low-altitude Industry Innovation Contest<br>
<em>(Project: "Dome Vision: UAV AI-based Intelligent Inspection System for Building Facades")</em></li>
<li><em>2025.05</em> <strong>Second Prize</strong> (Jiangsu Division) in C/C++ Programming, the 16th Lanqiao Cup National Software and Information Technology Professionals Competition</li>
<li><em>2025.05</em> <strong>Honorable Mention</strong> (School-level Final), the 19th "Challenge Cup" National Undergraduate Extracurricular Academic Science and Technology Works Competition<br>
<em>(Project: "Traffic Eagle Eye: Founder of Collaborative Sensing for Urban Smart Traffic 5G Base Stations")</em></li>
<li><em>2024.11</em> <strong>Third Prize</strong> (East China Division), National College Computer Ability Challenge (NCCCU)</li>
<li><em>2024.04</em> <strong>Third Prize</strong> (Jiangsu Division) in Python Programming, the 15th Lanqiao Cup National Software and Information Technology Professionals Competition</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><em>2025.09</em> <strong>三等奖</strong>（江苏赛区），全国大学生数学建模竞赛</li>
<li><em>2025.08</em> <strong>二等奖（全国总决赛）</strong>，睿抗机器人开发者大赛</li>
<li><em>2025.07</em> <strong>二等奖</strong>（江苏赛区），睿抗机器人开发者大赛</li>
<li><em>2025.06</em> <strong>优秀奖</strong>，2025年低空产业创新大赛<br>
<em>（项目：「穹顶慧眼：基于无人机 AI 的建筑外立面智能巡检体系」）</em></li>
<li><em>2025.05</em> <strong>二等奖</strong>（江苏赛区，C/C++程序设计），第十六届蓝桥杯全国软件和信息技术专业人才大赛</li>
<li><em>2025.05</em> <strong>优秀奖</strong>（校级决赛），第十九届「挑战杯」全国大学生课外学术科技作品竞赛<br>
<em>（项目：「交通鹰眼-城市智慧交通5G基站协同感知奠基者」）</em></li>
<li><em>2024.11</em> <strong>三等奖</strong>（华东赛区），全国高校计算机能力挑战赛</li>
<li><em>2024.04</em> <strong>三等奖</strong>（江苏赛区，Python程序设计），第十五届蓝桥杯全国软件和信息技术专业人才大赛</li>
</ul>
</div>

<h2 class="lang-en" style="display: none;">🎓 Scholarships & Personal Honors</h2>
<h2 class="lang-zh" style="display: none;">🎓 奖学金与个人荣誉</h2>

<div class="lang-en" style="display: none;">
<ul>
<li><em>2025.12</em> Third-class Outstanding Student Scholarship (2024-2025 Academic Year), Jinling Institute of Technology</li>
<li><em>2025.10</em> "Merit Student" Title (2024-2025 Academic Year), Jinling Institute of Technology</li>
<li><em>2025.05</em> "Learning Pacemaker" Title, School of Software Engineering</li>
<li><em>2024.12</em> Third-class Outstanding Student Scholarship (2023-2024 Academic Year), Jinling Institute of Technology</li>
<li><em>2024.10</em> "Merit Student" Title (2023-2024 Academic Year), Jinling Institute of Technology</li>
<li><em>2024.06</em> "Outstanding Club Member" Title, Jinling Institute of Technology</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><em>2025.12</em> 三等优秀学生奖学金（2024-2025学年），金陵科技学院</li>
<li><em>2025.10</em> 「三好学生」荣誉称号（2024-2025学年），金陵科技学院</li>
<li><em>2025.05</em> 「学习标兵」荣誉称号，软件工程学院</li>
<li><em>2024.12</em> 三等优秀学生奖学金（2023-2024学年），金陵科技学院</li>
<li><em>2024.10</em> 「三好学生」荣誉称号（2023-2024学年），金陵科技学院</li>
<li><em>2024.06</em> 「优秀社团成员」荣誉称号，金陵科技学院</li>
</ul>
</div>

<h2 class="lang-en" style="display: none;">🛠️ Skills & Certificates</h2>
<h2 class="lang-zh" style="display: none;">🛠️ 技能与证书</h2>

<div class="lang-en" style="display: none;">
<ul>
<li><em>2024.09</em> PAT Computer Ability Test - Programming (Basic Level) (Full Score: <strong>100/100</strong>)</li>
<li><em>2024.09</em> National Computer Rank Examination (NCRE) Grade 2 Certificate</li>
</ul>
</div>

<div class="lang-zh" style="display: none;">
<ul>
<li><em>2024.09</em> PAT 计算机能力测试 - 编程（基础级）（满分：<strong>100/100</strong>）</li>
<li><em>2024.09</em> 全国计算机等级考试二级证书</li>
</ul>
</div>

