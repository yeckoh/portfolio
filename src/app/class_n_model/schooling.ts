export class Schooling {

    name = '';
    abbrev = '';
    year = '';
    course: [{
        name: string,
        code: string,
        description: string,
        thoughts: string
    }];

    constructor() {
        this.course = [{ name: '', code: '', description: '', thoughts: '' }];
    }

    fillOutTCC() {
        this.name = "Tidewater Community College";
        this.abbrev = "TCC";
        this.year = "2013-2015";
        this.course[0] = {
            name: "Computer Science 1",
            code: "CSC 201",
            description: "Intro to C++ up to structs and functions",
            thoughts: ''
        };

        this.course.push({
            name: "Computer Organization",
            code: "CSC 205",
            description: "Hardware concepts E.g., Von Neumann model, RAM blocks, gates, Karnaugh maps. Stack vs heap, Huffman encoding, jpeg compression, and assembly",
            thoughts: ''
        });
        this.course.push({
            name: "Programming with C++",
            code: "CSC 210",
            description: "Pointers, file IO, classes, objects, polymorphism and inheritance",
            thoughts: ''
        });
        this.course.push({
            name: "Advanced Computer Organization",
            code: "CSC 215",
            description: "Machine language, registers, CPU microinstructions, cache, and CPU architectures like RISC vs CISC. Based on The Essentials of Computer Organization and Architecture by Linda Null",
            thoughts: ''
        });

        return this;
    }

    fillOutCNU() {
        this.name = "Christopher Newport University";
        this.abbrev = "CNU";
        this.year = "2018-2020";
        this.course = [{
            name: "Computers and Programming II",
            code: "CPSC 250",
            description: "Programming fundamentals in Java",
            thoughts: ''
        }];

        this.course.push({
            name: "Discrete Logic",
            code: "ENGR 213",
            description: "Propositional logic, proofs, set theory, permutations & combinatorics, trees, graph theory",
            thoughts: ''
        });
        this.course.push({
            name: "Linear Algebra",
            code: "MATH 260",
            description: "Vectors, matrix operations, linear systems of equations, identities, normalization, bases",
            thoughts: ''
        });
        this.course.push({
            name: "Data and File Structures",
            code: "CPSC 270",
            description: "Java FileIO, sorting algorithms, CSVs, trees (binary, AVL, )",
            thoughts: ''
        });
        this.course.push({
            name: "Digital Logic Design",
            code: "CPEN 214",
            description: "Hexadecimal, binary, logic optimization/Karnaugh maps, flip-flops, gate breadboarding, multiplexers & decoders",
            thoughts: ''
        });
        this.course.push({
            name: "Intro to Software Engineering",
            code: "CPSC 280",
            description: "Intro to software design paradigms such as waterfall and agile, TDD, UML diagrams, version control and documentation. Intro to Java Swing GUI development. ++Built a space invaders jar",
            thoughts: ''
        });
        this.course.push({
            name: "Data Communication Systems",
            code: "CPSC 335",
            description: "Intro to the OSI model and its 7 layers: packets, UDP vs TCP, subnet masks, mac addresses, basic enterprise networking and security concepts, and projects using Apache with PHP",
            thoughts: ''
        });
        this.course.push({
            name: "C++ Programming",
            code: "CPSC 327",
            description: "C++ with an emphasis on the STL, magic numbers, lambdas, and professional conventions",
            thoughts: ''
        });
        this.course.push({
            name: "Programming Language Concepts",
            code: "CPSC 360",
            description: "Introduction to concepts such as Functional programming, function storage in the stack and heap. Projects written in C#, C++, COBOL, Haskell, Prolog, PHP, and Python among others",
            thoughts: ''
        });
        this.course.push({
            name: "Operation Systems I",
            code: "CPSC 410",
            description: "Pages, scheduling, lambdas, multithreading with mutexes and semaphores in C++",
            thoughts: ''
        });
        this.course.push({
            name: "Algorithms",
            code: "CPSC 420",
            description: "Analysis of 30 algorithms and their design principles such as brute-force and approximation from Introduction to The Design & Analysis of Algorithms 3rd Ed. by Anany Levitin",
            thoughts: ''
        });
        this.course.push({
            name: "Object Oriented Program & Design",
            code: "CPSC 425",
            description: "Java. Patterns such as builders & factories, observers & listeners, adapters, singletons & composites. Data traversal and transforms using lambdas, iterators, and streams. Java cloning, serialization, and reflection. Bindings and JavaFX",
            thoughts: ''
        });
        this.course.push({
            name: "Software Design/Development",
            code: "CPSC 480",
            description: "Using and contributing to FOSS and HFOSS projects. Software development lifecycles. Projects using the LAMP stack. Regex. ++Contributed to SugarLabs’s MusicBlocks git repository",
            thoughts: ''
        });
        this.course.push({
            name: "Database Management Systems",
            code: "CPSC 440",
            description: "Relational database concepts and application. 1-to-many, primary keys, secondary keys, DBMS’s, Docker containers, and SQL using MySQL Workbench",
            thoughts: ''
        });
        this.course.push({
            name: "Capstone Project",
            code: "CPSC 498",
            description: "Picked up the MEAN stack and developed a web application utilizing WebSockets for real-time full-duplex multiuser interaction (MongoDB, Express, Angular, NodeJS, WebSocket.io). Designed the database to use both one-to-many and many-to-many relationships.",
            thoughts: ''
        });

        return this;
    }

}
