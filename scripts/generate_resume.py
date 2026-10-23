import os

def create_resume_pdf(output_path):
    # A4 dimensions: 595 x 842 points
    # We will construct a clean, valid PDF 1.4 document
    
    stream_lines = [
        "BT",
        "/F2 22 Tf",
        "50 790 Td",
        "(RAMESH HAMPIHOLI) Tj",
        "ET",
        
        "BT",
        "/F1 11 Tf",
        "50 770 Td",
        "(Aspiring Software Developer | Python & AI Enthusiast) Tj",
        "ET",
        
        "BT",
        "/F1 9 Tf",
        "50 752 Td",
        "(Location: Gadag, Karnataka, India  |  Email: rameshhampiholi10@gmail.com) Tj",
        "ET",
        
        "BT",
        "/F1 9 Tf",
        "50 738 Td",
        "(GitHub: github.com/ramesh-hampiholi-1819  |  Portfolio: ramesh-hampiholi-1819.github.io/portfolio/) Tj",
        "ET",
        
        # Horizontal line
        "0.2 w",
        "0.3 0.3 0.3 RG",
        "50 726 m 545 726 l S",
        
        # SECTION: PROFILE
        "BT",
        "/F2 13 Tf",
        "50 706 Td",
        "(PROFESSIONAL SUMMARY) Tj",
        "ET",
        
        "BT",
        "/F1 9.5 Tf",
        "50 690 Td",
        "(BCA student at Karnatak University Dharwad with a strong passion for software development, Python,) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "50 676 Td",
        "(data-driven applications, and artificial intelligence. Dedicated to writing clean, maintainable code,) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "50 662 Td",
        "(solving practical problems, and continually exploring modern computer science disciplines.) Tj",
        "ET",
        
        # Line
        "50 650 m 545 650 l S",
        
        # SECTION: EDUCATION
        "BT",
        "/F2 13 Tf",
        "50 630 Td",
        "(EDUCATION) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 614 Td",
        "(Bachelor of Computer Applications (BCA)) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "50 600 Td",
        "(Karnatak University Dharwad | 2023 - Present) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 588 Td",
        "(- Core coursework: Python, Java, C Programming, Database Systems, Web Development) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 568 Td",
        "(Pre-University Course (PUC)) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "50 554 Td",
        "(F. B. Pujar Government College, Shirahatti | Completed) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 534 Td",
        "(Secondary School (AISSE / Class 10)) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "50 520 Td",
        "(Jawahar Navodaya Vidyalaya (JNV), Gadag | Completed) Tj",
        "ET",
        
        # Line
        "50 508 m 545 508 l S",
        
        # SECTION: SKILLS
        "BT",
        "/F2 13 Tf",
        "50 488 Td",
        "(TECHNICAL SKILLS) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 472 Td",
        "(Programming Languages:) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "180 472 Td",
        "(Python, Java, C, JavaScript) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 456 Td",
        "(Web Development:) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "180 456 Td",
        "(HTML5, CSS3, React, Node.js) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 440 Td",
        "(Databases & Storage:) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "180 440 Td",
        "(MySQL, MongoDB, Firebase) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 424 Td",
        "(Developer Tools:) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "180 424 Td",
        "(Git, GitHub, VS Code, Google Colab, Streamlit) Tj",
        "ET",
        
        "BT",
        "/F2 9.5 Tf",
        "50 408 Td",
        "(Currently Exploring:) Tj",
        "ET",
        "BT",
        "/F1 9.5 Tf",
        "180 408 Td",
        "(Machine Learning, Data Science, Generative AI, Data Visualization) Tj",
        "ET",
        
        # Line
        "50 396 m 545 396 l S",
        
        # SECTION: PROJECTS
        "BT",
        "/F2 13 Tf",
        "50 376 Td",
        "(FEATURED PROJECTS) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 360 Td",
        "(1. Student Data Analysis System (Live Streamlit Application)) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 346 Td",
        "(Tech: Python, Pandas, Streamlit, Matplotlib | Live: student-data-analysis-v2.streamlit.app) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 334 Td",
        "(- Automated academic metric computations and visual grade distribution analysis from CSV data.) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 314 Td",
        "(2. Online Bus Pass Management System) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 300 Td",
        "(Tech: HTML, CSS, JavaScript, MySQL | College Project) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 288 Td",
        "(- Streamlined student transit pass applications, route validation, and administrative verification records.) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 268 Td",
        "(3. ACMS / UCMS Academic Management Portal) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 254 Td",
        "(Tech: JavaScript, HTML5, CSS3, Node.js | github.com/ramesh-hampiholi-1819/college-management) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 242 Td",
        "(- Role-based architecture for student details, course tracking, and departmental notices.) Tj",
        "ET",
        
        "BT",
        "/F2 10.5 Tf",
        "50 222 Td",
        "(4. Crack The Code - Cryptography & Logic Challenges) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 208 Td",
        "(Tech: Python, Algorithms | github.com/ramesh-hampiholi-1819/CRACK-THE-CODE) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 196 Td",
        "(- Algorithmic cipher encoder/decoder and code-breaking logic challenges.) Tj",
        "ET",
        
        # Line
        "50 184 m 545 184 l S",
        
        # SECTION: LEARNING INTERESTS
        "BT",
        "/F2 13 Tf",
        "50 164 Td",
        "(CURRENT LEARNING & FOCUS AREAS) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 148 Td",
        "(- Python for Data Analysis & Exploratory Data Science) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 136 Td",
        "(- Machine Learning Fundamentals & Supervised Learning Algorithms) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 124 Td",
        "(- Modern Frontend Architecture with React, TypeScript & Tailwind CSS) Tj",
        "ET",
        "BT",
        "/F1 9 Tf",
        "50 112 Td",
        "(- Data Structures, Memory Management, and Algorithmic Optimization) Tj",
        "ET"
    ]
    
    stream_content = "\n".join(stream_lines)
    stream_bytes = stream_content.encode('latin1')
    stream_len = len(stream_bytes)
    
    # Objects
    objects = []
    # 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    # 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    # 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n")
    # 4: Contents stream
    objects.append(f"4 0 obj\n<< /Length {stream_len} >>\nstream\n{stream_content}\nendstream\nendobj\n")
    # 5: Font F1 (Helvetica)
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")
    # 6: Font F2 (Helvetica-Bold)
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
    
    # Build file with xref
    header = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
    body = ""
    offsets = []
    
    current_offset = len(header.encode('latin1'))
    for obj in objects:
        offsets.append(current_offset)
        obj_bytes = obj.encode('latin1')
        current_offset += len(obj_bytes)
        body += obj
        
    xref_offset = current_offset
    xref = f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for offset in offsets:
        xref += f"{offset:010d} 00000 n \n"
        
    trailer = f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n"
    
    pdf_content = (header + body + xref + trailer).encode('latin1')
    
    with open(output_path, 'wb') as f:
        f.write(pdf_content)
    print(f"Generated resume PDF successfully at {output_path} ({len(pdf_content)} bytes)")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_resume_pdf("public/resume.pdf")
