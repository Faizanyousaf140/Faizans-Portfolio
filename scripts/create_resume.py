from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_TAB_ALIGNMENT, WD_TAB_LEADER
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT

OUT=Path(__file__).resolve().parents[1] / 'public' / 'resume.docx'
BLUE=RGBColor(43,88,132)
INK=RGBColor(18,22,27)
DARK=RGBColor(36,43,51)
DUST=RGBColor(76,82,90)
LINK=RGBColor(0,78,190)

D=Document()
sec=D.sections[0]
sec.page_width=Inches(8.27); sec.page_height=Inches(11.69)
sec.left_margin=Inches(.53); sec.right_margin=Inches(.53)
sec.top_margin=Inches(.34); sec.bottom_margin=Inches(.34)
sec.header_distance=Inches(.14);sec.footer_distance=Inches(.14)

normal=D.styles['Normal']
normal.font.name='Caladea';normal.font.size=Pt(10.0);normal.font.color.rgb=INK
normal.paragraph_format.line_spacing=1.04
normal.paragraph_format.space_after=Pt(0)

style=D.styles.add_style('Small',WD_STYLE_TYPE.PARAGRAPH)
style.base_style=normal
style.font.name='Caladea';style.font.size=Pt(9.5);style.font.color.rgb=INK
style.paragraph_format.line_spacing=1.02
style.paragraph_format.space_after=Pt(0)

style=D.styles.add_style('BulletLine',WD_STYLE_TYPE.PARAGRAPH)
style.base_style=normal
style.font.name='Caladea';style.font.size=Pt(9.45)
style.paragraph_format.line_spacing=1.02
style.paragraph_format.left_indent=Inches(.13)
style.paragraph_format.first_line_indent=Inches(-.09)
style.paragraph_format.space_after=Pt(1.3)

style=D.styles.add_style('SectionLine',WD_STYLE_TYPE.PARAGRAPH)
style.base_style=normal
style.font.name='Caladea';style.font.size=Pt(10.65);style.font.bold=True
style.font.color.rgb=BLUE
style.paragraph_format.space_before=Pt(10.6)
style.paragraph_format.space_after=Pt(4.3)
style.paragraph_format.line_spacing=1.0

style=D.styles.add_style('JobHead',WD_STYLE_TYPE.PARAGRAPH)
style.base_style=normal
style.font.name='Caladea';style.font.size=Pt(9.95)
style.paragraph_format.space_before=Pt(2)
style.paragraph_format.space_after=Pt(.1)
style.paragraph_format.line_spacing=1.0

style=D.styles.add_style('ProjectLine',WD_STYLE_TYPE.PARAGRAPH)
style.base_style=normal
style.font.name='Caladea';style.font.size=Pt(9.6)
style.paragraph_format.line_spacing=1.06
style.paragraph_format.space_after=Pt(2.3)


def setkeep(p, next=False):
    pPr=p._p.get_or_add_pPr(); tag=OxmlElement('w:keepNext' if next else 'w:keepLines');pPr.append(tag)

def no_split(p): setkeep(p,False)

def run(p,t,b=False,i=False,color=None,underline=False):
    r=p.add_run(t);r.bold=b;r.italic=i;r.underline=underline
    r.font.name='Caladea';r.font.color.rgb=color if color else INK
    return r

def link(p,text,url,bold=False):
    part=p.part
    rel=part.relate_to(url,RT.HYPERLINK,is_external=True)
    hyperlink=OxmlElement('w:hyperlink');hyperlink.set(qn('r:id'),rel)
    r=OxmlElement('w:r')
    rPr=OxmlElement('w:rPr')
    rgb=OxmlElement('w:color');rgb.set(qn('w:val'),'0059CB');rPr.append(rgb)
    u=OxmlElement('w:u');u.set(qn('w:val'),'single');rPr.append(u)
    f=OxmlElement('w:rFonts');f.set(qn('w:ascii'),'Caladea');f.set(qn('w:hAnsi'),'Caladea');rPr.append(f)
    if bold:
        b=OxmlElement('w:b');rPr.append(b)
    r.append(rPr)
    text_el=OxmlElement('w:t');text_el.text=text;r.append(text_el)
    hyperlink.append(r);p._p.append(hyperlink)


def border(p):
    pPr=p._p.get_or_add_pPr(); bdr=OxmlElement('w:pBdr'); b=OxmlElement('w:bottom')
    b.set(qn('w:val'),'single');b.set(qn('w:sz'),'5');b.set(qn('w:color'),'333333');b.set(qn('w:space'),'1')
    bdr.append(b);pPr.append(bdr)

def section(t):
    p=D.add_paragraph(style='SectionLine')
    run(p,t,b=True,color=BLUE,underline=True)
    border(p);setkeep(p,True)
    return p

def head(left,right):
    p=D.add_paragraph(style='JobHead')
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.18),WD_TAB_ALIGNMENT.RIGHT)
    run(p,left,b=True)
    run(p,'\t'+right,b=True)
    setkeep(p,True)
    return p

def bul(t):
    p=D.add_paragraph(style='BulletLine')
    run(p,'•  '+t)
    no_split(p)
    return p

def project(title,url,stack,desc,demo=None,detail=None):
    p=D.add_paragraph(style='ProjectLine')
    if url: link(p,title,url,bold=True)
    else: run(p,title,b=True)
    run(p,'  ('+stack+')',color=DUST)
    if demo:
        run(p,'  |  ',color=DUST)
        link(p,'Live demo',demo)
    p2=D.add_paragraph(style='BulletLine')
    run(p2,'•  '+desc)
    setkeep(p,True);no_split(p2)
    if detail:
        p3=D.add_paragraph(style='BulletLine')
        run(p3,'•  '+detail)
        no_split(p3)
    return p

# HEADER
p=D.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER
p.paragraph_format.space_after=Pt(1.8)
r=run(p,'MUHAMMAD FAIZAN YOUSAF',b=True);r.font.size=Pt(18.5)
p=D.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER
p.paragraph_format.space_after=Pt(.4)
r=run(p,'FULL-STACK SOFTWARE ENGINEER  |  AI / LLM APPLICATIONS  |  BACKEND & TESTING',b=True,color=DARK);r.font.size=Pt(10.1)
p=D.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER;p.paragraph_format.space_after=Pt(.4)
r=run(p,'Faisalabad, Pakistan  |  +92 345 7956200  |  ');r.font.size=Pt(9.25)
link(p,'faizanyousaf140@gmail.com','mailto:faizanyousaf140@gmail.com')
p=D.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER;p.paragraph_format.space_after=Pt(4.8)
link(p,'linkedin.com/in/faizan-yousaf1','https://www.linkedin.com/in/faizan-yousaf1/')
run(p,'  |  ',color=DUST)
link(p,'github.com/Faizanyousaf140','https://github.com/Faizanyousaf140')
run(p,'  |  ',color=DUST)
link(p,'Portfolio','https://faizanyousafs-portfolio.vercel.app/')

section('PROFESSIONAL SUMMARY')
p=D.add_paragraph(style='Small')
run(p,'FAST-NUCES Computer Science graduate (CGPA 3.33/4.00) and Junior Software Engineer at Deaimer. Build Next.js/TypeScript web applications, Python/Node.js APIs and applied AI systems including RAG and multimodal ML. Design and validate coding-agent benchmarks using Docker/Linux environments, test harnesses and reproducible checks.')

section('EDUCATION')
head('FAST-NUCES  |  BS Computer Science  |  CGPA: 3.33/4.00','Aug 2022 – Jun 2026')
p=D.add_paragraph(style='Small');run(p,'National University of Computer and Emerging Sciences, Chiniot-Faisalabad Campus')

section('TECHNICAL SKILLS')
p=D.add_paragraph(style='Small');run(p,'Frontend: ',b=True);run(p,'Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML/CSS')
p=D.add_paragraph(style='Small');run(p,'Backend & Databases: ',b=True);run(p,'Python, Django REST, FastAPI, Flask, Node.js/Express, REST APIs, PostgreSQL, MongoDB, MySQL, Redis')
p=D.add_paragraph(style='Small');run(p,'AI / ML: ',b=True);run(p,'PyTorch, Hugging Face, QLoRA/PEFT, Scikit-learn, RAG, FAISS, Sentence Transformers, Whisper')
p=D.add_paragraph(style='Small');run(p,'Testing & Delivery: ',b=True);run(p,'Docker, Linux, pytest, Mocha/Chai, JUnit 5, Jenkins, GitHub Actions, Git, CI/CD')

section('PROFESSIONAL EXPERIENCE')
head('Junior Software Engineer (AI Evaluation)  |  Deaimer','Jun 2026 – Present')
bul('Design Python, JavaScript and SQL coding-agent tasks, acceptance criteria, reference solutions and automated verifiers.')
bul('Build isolated Docker/Linux evaluation environments; investigate correctness defects, boundary cases and regressions.')
bul('Review AI-generated implementations, document test evidence and validate fixes using reproducible workflows.')
head('Teaching Assistant (Part-time)  |  FAST-NUCES','Jan 2025 – Jun 2026')
bul('Supported four teaching assignments in Web Programming, Algorithms and Computer Networks; guided debugging and assessments.')
head('AI / Software Engineering Intern  |  Digital Genei','Jun – Jul 2025')
bul('Developed Python REST components for Whisper transcription, NLP summaries and FAISS-based meeting search.')
head('Machine Learning Intern  |  Skillify Zone','Jul – Aug 2025')
bul('Built a Pandas/scikit-learn classification workflow with model evaluation and a Streamlit prediction interface.')

section('SELECTED PROJECTS')
project('AI Knowledge OS','https://github.com/Faizanyousaf140/AI-Knowledge-OS','Next.js, Node.js, MongoDB, RAG, Redis',
        'Developed authenticated project/note APIs, contextual LLM chat, semantic retrieval and background embedding jobs.',
        'https://ai-knowledge-os.vercel.app/',
        'Added project-scoped retrieval, source attribution and Redis/BullMQ queue retries for embedding tasks.')
project('RentEase PK','https://github.com/Faizanyousaf140/RentEase-PK','Next.js, TypeScript, Django REST, FastAPI',
        'Built rental and payment dashboards, role-protected REST workflows and a rental-agreement PDF microservice.',
        detail='Integrated tenant/landlord views with Django REST APIs, request validation and FastAPI document generation.')
project('Qwen2-VL Document-to-Markdown','https://github.com/Faizanyousaf140/VLM-qlora-doc2markdown','PyTorch, QLoRA/PEFT, Hugging Face',
        'Fine-tuned Qwen2-VL-2B for document-image to Markdown conversion and built a Gradio review interface.',
        'https://huggingface.co/spaces/Faizan11112/doc2markdown-vlm',
        'Prepared multimodal training data and evaluated model output with reproducible inference examples.')
project('Spotter Fuel Route Planner','https://github.com/Faizanyousaf140/spotter-fuel-route-planner','Python, Django REST, OSRM, Leaflet',
        'Designed route and fuel-stop APIs with constrained cost optimization and repeatable validation checks.',
        detail='Combined OSRM route geometry and fuel-station data under range and fuel-consumption assumptions.')
project('ELD Trip Planner','https://github.com/Faizanyousaf140/eld-trip-planner','React, Django REST, PostgreSQL, Leaflet',
        'Implemented interactive trip routing and driver daily-log generation using hours-of-service rules.',
        detail='Connected a React/Leaflet interface with Django REST trip endpoints and persisted trip information.')
project('Clinical Notes RAG','https://github.com/Faizanyousaf140/RAG-for-Diagnostic-Reasoning-in-Clinical-Notes-DiReCT-','Python, FAISS, embeddings, LLMs',
        'Built evidence-grounded question answering with retrieved clinical passages and cited context.',
        detail='Exposed top-k retrieved evidence alongside responses to make supporting context inspectable.')
project('Authentication & CI Testing','https://github.com/Faizanyousaf140/nodejs-auth-mocha-jenkins','Node.js, Mocha/Chai, Supertest, Jenkins',
        'Automated login/signup API checks, negative scenarios and a repeatable Jenkins pipeline.',
        detail='Used Mocha/Chai and Supertest to exercise authentication endpoints and validate error handling.')

section('CERTIFICATIONS & ACHIEVEMENTS')
p=D.add_paragraph(style='Small')
link(p,'Machine Learning Specialization','https://www.coursera.org/account/accomplishments/specialization/Q4A7R6RWXYD3',bold=True)
run(p,' — DeepLearning.AI / Stanford Online (Jul 2025)  |  ')
link(p,'NLP: Classification & Vector Spaces','https://www.coursera.org/account/accomplishments/verify/HUZ8D8TG6S7S',bold=True)
run(p,' (Jul 2025)')
p=D.add_paragraph(style='Small')
link(p,'Google Prompting Essentials','https://www.coursera.org/account/accomplishments/specialization/Y67VK3EUY21D',bold=True)
run(p,' (Aug 2026)  |  ')
link(p,'Google Network Security','https://www.coursera.org/account/accomplishments/specialization/7G3G47ELAMCH',bold=True)
run(p,' (Aug 2026)')
p=D.add_paragraph(style='Small')
run(p,'HEC National Skills Competency Test (2026): ',b=True)
run(p,'71/100  |  97.7th percentile')

# metadata and page settings
D.core_properties.title='Muhammad Faizan Yousaf - General Software Engineer CV'
D.core_properties.author='Muhammad Faizan Yousaf'
D.core_properties.subject='Software engineering, full stack, AI and backend'
D.save(str(OUT))
print(f'Editable CV saved to: {OUT}')
print('Export resume.docx to PDF in Word or LibreOffice after editing.')
