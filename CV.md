# Vyacheslav Efimov

**Senior Machine Learning Engineer** | Paris, France

[GitHub](https://github.com/slavastar) | [LinkedIn](https://linkedin.com/in/vyacheslav-efimov) | [slavastack@gmail.com](mailto:slavastack@gmail.com) | [Medium Blog](https://medium.com/@slavahead)

---

## Experience

### Senior Machine Learning Engineer, *Contract*
**Aspect Health** — US health-tech startup building AI-driven health products | Remote, USA
`Nov 2025 - Mar 2026`

- Owned the AI recommendation service from 0 → 1: production-ready meal generation engine leveraging generative AI (LLMs and image generation) with integrated price optimization, cutting meal plan costs.

---

### Machine Learning Engineer, *Full time*
**Leveraize** — consulting company supporting other French enterprises in the AI development | Le Mans, France
`Mar 2024 - Oct 2025`

- Built CV tools to perform object classification, detection, OCR, image segmentation, image clustering, object length measurement, camera calibration using OpenCV, YOLO, YOLOE, ResNet, U-Net, FastSAM, SAM-2.
- Delivered a full-stack image segmentation application using U-Net for microscopic metal analysis, developing ML, backend, and DevOps components, and deploying the end-to-end system on AWS.
- Implemented Python code generation and information retrieval pipelines with LLMs, RAG, FAISS and LangChain.

---

### Content Creator (AI / Machine Learning), *Freelance*
**Towards Data Science** — the world's leading publication for data science, AI, and ML professionals | Remote
`Apr 2023 - Present`

- Wrote 60+ machine learning articles on my Data Science blog, all published on Towards Data Science.
- Built an audience of 3.7K+ followers on Medium.
- Best article series: [Reinforcement Learning](https://medium.com/@slavahead/list/reinforcement-learning-78e5b7cb3292) | [Similarity Search](https://medium.com/@slavahead/list/similarity-search-598d963ad35e) | [Large Language Models](https://medium.com/@slavahead/list/large-language-models-4d85e1fe0b9a) | [Computer Vision](https://medium.com/@slavahead/list/computer-vision-4fd1e040456b)

---

### Machine Learning Engineer, *Full time*
**Sberbank** — the largest bank in Eastern Europe with an advanced AI ecosystem | Saint Petersburg, Russia
`Nov 2021 - Sept 2022`

- Created NLP model to classify user goals at scale (~100 classes, 800K+ entries) for a mobile banking RecSys.
- Built scalable ML models for client payment prediction, processing tens of millions of transactions via PySpark on HDFS.
- Performed adhoc analytics by developing ETL pipelines processing 2000+ GB of data with PySpark.
- Speeded up similarity search algorithms in a text corpus consisting of 300K+ samples.

---

### Machine Learning Engineer, *Full time*
**Devim** — enterprise developing fintech platforms | Saint Petersburg, Russia
`Feb 2021 - Nov 2021`

- Developed ML models (classification, regression, clustering, uplift) on a 4M-client dataset for credit scoring, validating key hypotheses and narrowing future modeling directions.

---

### Intern Software Engineer, *Full time*
**Element** — company specializing in smart city solutions powered by IoT technologies | Saint Petersburg, Russia
`Jun 2020 - Sept 2020`

- Built a REST API backend to collect sensor data from 3G/4G/LTE devices in buildings and store it in a SQL database.

---

## Education

**Bachelor's Degree in Software Engineering** — [ITMO University](https://en.itmo.ru/)
*Ranked among the top 100 IT universities worldwide in Computer Science* | Saint Petersburg, Russia
**GPA: 4.50 / 5.00 (A-)**

---

## Hackathons

| Hackathon | Project | Place | Date | Location |
|-----------|---------|:-----:|------|----------|
| {Tech: Europe} | Parley — AI roleplay game for practicing languages | **2nd** | Feb 2026 | Paris |
| Google Healthcare | AURA — AI tool providing triage insights for nurses | **3rd** | Jul 2025 | Paris |
| Shift Hackathon | Uchronia — AI game to alternate history scenarios | **3rd** | Mar 2025 | Nantes |
| 24 Hours of Code | AI agent (ReAct) to automate hotel reception tasks | **Winner** | Mar 2025 | Le Mans |

---

## Skills

| Category | Technologies |
|----------|-------------|
| **Programming Languages** | Python, JavaScript, Java |
| **Machine Learning** | Pandas, NumPy, Seaborn, Scikit-Learn, Optuna, LightGBM, TensorFlow, PyTorch, PuLP |
| **Natural Language Processing** | HuggingFace, RAG, LangChain, LangGraph, Similarity Search, LLMs, AI agents, MCP |
| **Computer Vision** | OpenCV, YOLO, ResNet, U-Net, FastSAM, SAM-2, CLIP |
| **Data** | SQL, MongoDB, FAISS, PySpark, Grafana, Supabase |
| **Backend** | FastAPI, Flask, Node.js, Spring, Streamlit, Postman |
| **DevOps** | Linux, Docker, Git, Ansible, AWS, Google Cloud |

---

## Languages

| Language | Level |
|----------|-------|
| Russian | C2 (Native) |
| English | C1 |
| French | C1 |
| Spanish | B2 |
| Portuguese | B1 |
| Italian | B1 |


# Questions

Featured article series:

Large Language Models: https://medium.com/@slavahead/list/large-language-models-4d85e1fe0b9a
Similarity Search: https://medium.com/@slavahead/list/similarity-search-598d963ad35e
Computer Vision: https://medium.com/@slavahead/list/computer-vision-4fd1e040456b
Reinforcement Learning: https://medium.com/@slavahead/list/reinforcement-learning-78e5b7cb3292
System Design: https://medium.com/@slavahead/list/system-design-4aefa9650ca2

You can mention references with links to specific article series if there is a question that asks about particular skills and article series cover it.

# Salary expectations
My salary expectations are between 70K and 75K euros gross per year. If a job posting specifies a salary range, select the boundary closest to my target: use the upper bound if the range falls below 70K, and the lower bound if the range exceeds 75K.

# Sectors
I worked in:
* credit scoring
* banking, fintech
* AI consulting
* healthcare
But I am also open to other domains

# Other information
* I enjoy mentoring interns and junior team members and supporting their growth within the team.
* Fluent in both English and French.
* Fully authorized to work in France.
* Open to hybrid work (2–3 days in the office) as well as fully remote positions.
* Looking primarily for a CDI, though I also hold micro-entrepreneur status and am open to freelance engagements.

# Questions

## If there is a question asking to describe one project about which I am proud of or just a project with lots challenges and how I tackled them, you can give this example.
At Sberbank, I led end-to-end development of an NLP pipeline to classify short user-written financial goals into one or more of nearly 100 intent categories. The business objective was to:
* better understand user profiles
* leverage those intents as signals for personalized recommendations.
For instance, if a user mentioned saving up to buy a phone, we would use that intent to surface relevant product offers.

**Technical approach.** I designed a hybrid pipeline combining a large dictionary of regular expressions to handle high-confidence keyword matches, with a FastText model to cover the remaining ambiguous cases. This two-stage approach significantly improved both precision and coverage compared to a model-only solution.

**Data labeling challenge.** The dataset was entirely unlabeled and contained 800K entries. With a limited budget and tight deadline, I applied heuristics to select a representative 20K subset and outsourced annotation to a crowdsourcing platform. This came with its own set of challenges: the multi-label nature of the task made it more complex than typical crowdsourcing jobs, so I designed a custom annotation interface optimized for non-expert users. To manage budget constraints, I set pricing carefully to keep costs sustainable while maintaining annotator motivation. To handle ambiguous examples, I implemented a voting strategy where multiple annotators labeled the same entry and the majority answer was selected, which measurably improved label reliability. I also added security constraints to detect and filter out automated bot submissions.

**Deployment and communication.** I owned the full development lifecycle, from requirements gathering with stakeholders to deploying the final solution in production. A key challenge was presenting complex technical concepts to a non-technical audience, which I addressed through clear visual explanations, focus on business outcomes, and concrete examples of edge cases.
