import { Injectable, HostListener, OnDestroy, OnInit } from '@angular/core';
import { WsService } from '../services/ws.service';
// import evaluate, { registerFunction } from 'ts-expression-evaluator';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { Readable, Stream } from 'stream'; // fileio
import { HttpClient } from '@angular/common/http';
import { ProgramLanguage } from '../class_n_model/program-language';

@Injectable({
  providedIn: 'root'
})

// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: max-line-length
// tslint:disable: no-inferrable-types
// tslint:disable: curly
// tslint:disable: member-ordering
export class LocaldataService implements OnDestroy, OnInit {

  constructor(private http: HttpClient) {
    // private ws: WsService, 
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  colors = ['firebrick', 'tomato', 'goldenrod', 'darkorange', 'limegreen', 'forestgreen', 'mediumseagreen', 'olivedrab', 'lightseagreen', 'teal', 'dodgerblue', 'steelblue', 'darkslateblue', 'orchid', 'blueviolet', 'deeppink', 'dimgray', 'saddlebrown', 'maroon', 'black'];
  selected_color = 0;


  /*
    BRACKET_EXPRESSION: RegExp = /\{([^{}]*)\}/g;
  
    nonRegularFormula(input: string) {
      let mutableInput = input;
      this.BRACKET_EXPRESSION.lastIndex = 0;
      try {
        if (this.BRACKET_EXPRESSION.test(input)) {
            let result;
            this.BRACKET_EXPRESSION.lastIndex = 0; // {0} is consumed by replace, now {0} is what was {1}
            while (result = this.BRACKET_EXPRESSION.exec(mutableInput)) {
              mutableInput = mutableInput.replace(result[0], evaluate(result[1], this));
              this.BRACKET_EXPRESSION.lastIndex = 0; // {0} is consumed by replace, now {0} is what was {1}
          }} else {
            mutableInput = input; }
        return mutableInput;
      } catch (error) {
        return 'NaN';
      }
    }
  */

  listenfor(eventName: string) {
    return new Observable((subscriber) => {
      // this.sock.on(eventName, (data: any) => {
      //   subscriber.next(data);
      // });
    });
  }

  // individual components sendback whatever emitters they specify by calling this
  sendback(eventName: string, data: any) {
    // this.sock.emit(eventName, data);
  }

  /// =======================================================
  /// =======================================================
  //  educationComponentData

  TCC = {
    name: "Tidewater Community College",
    abbrev: "TCC",
    year: "2013-2015",
    course: [
    { name: "Computer Science 1",
      code: "CSC 201",
      description: "Intro to C++ up to structs and functions" },
    { name: "Computer Organization",
      code: "CSC 205",
      description: "Hardware concepts E.g., Von Neumann model, RAM blocks, gates, Karnaugh maps. Stack vs heap, Huffman encoding, jpeg compression, and assembly" },
    { name: "Porgramming with C++",
      code: "CSC 210",
      description: "Pointers, file IO, classes, objects, polymorphism and inheritance" },
    { name: "Advanced Computer Organization",
      code: "CSC 215",
      description: "Machine language, registers, CPU microinstructions, cache, and CPU architectures like RISC vs CISC. Based on The Essentials of Computer Organization and Architecture by Linda Null" }
  ]};

  CNU = {
    name: "Christopher Newport University",
    abbrev: "CNU",
    year: "2018-2020",
    course: [
    { name: "Computers and Programming II",
      code: "CPSC 250",
      description: "Programming fundamentals in Java" },
    { name: "Discrete Logic",
      code: "ENGR 213",
      description: "Propositional logic, proofs, set theory, permutations & combinatorics, trees, graph theory" },
    { name: "Linear Algebra",
      code: "MATH 260",
      description: "Vectors, matrix operations, linear systems of equations, identities, normalization, bases" },
    { name: "Data and File Structures",
      code: "CPSC 270",
      description: "Java FileIO, sorting algorithms, CSVs, trees (binary, AVL, )" },
    { name: "Digital Logic Design",
      code: "CPEN 214",
      description: "Hexadecimal, binary, logic optimization/Karnaugh maps, flip-flops, gate breadboarding, multiplexers & decoders" },
    { name: "Data Communication Systems",
      code: "CPSC 335",
      description: "Intro to the OSI model and its 7 layers: packets, UDP vs TCP, subnet masks, mac addresses, basic enterprise networking and security concepts, and projects using Apache with PHP." },
    { name: "C++ Programming",
      code: "CPSC 327",
      description: "C++ with an emphasis on the STL, magic numbers, lambdas, and professional conventions" },
    { name: "Programming Language Concepts",
      code: "CPSC 360",
      description: "Introduction to concepts such as Functional programming, function storage in the stack and heap. Projects written in C#, C++, COBOL, Haskell, Prolog, PHP, and Python among others" },
    { name: "Operation Systems I",
      code: "CPSC 410",
      description: "Pages, scheduling, lambdas, multithreading with mutexes and semaphores in C++" },
    { name: "Algorithms",
      code: "CPSC 420",
      description: "Analysis of 30 algorithms and their design principles such as brute-force and approximation from Introduction to The Design & Analysis of Algorithms 3rd Ed. by Anany Levitin" },
    { name: "Object Oriented Program & Design",
      code: "CPSC 425",
      description: "Java. Patterns such as builders & factories, observers & listeners, adapters, singletons & composites. Data traversal and transforms using lambdas, iterators, and streams. Java cloning, serialization, and reflection. Bindings and JavaFX." },
    { name: "Database Management Systems",
      code: "CPSC 440",
      description: "Relational database concepts and application. 1-to-many, primary keys, secondary keys, DBMS’s, Docker containers, and SQL using MySQL Workbench" },
    { name: "Software Design/Development",
      code: "CPSC 480",
      description: "Using and contributing to FOSS and HFOSS projects. Development approaches such as Waterfall and Agile. Projects using LAMP stack. ++Contributed to SugarLabs’s MusicBlocks git repository" },
    { name: "Capstone Project",
      code: "CPSC 498",
      description: "Picked up the MEAN stack and developed a web application utilizing WebSockets for real-time full-duplex multiuser interaction (MongoDB, Express, Angular, NodeJS, WebSocket.io). Designed the database to use both one-to-many and many-to-many relationships." }
      // { name: "Introduction",
      // code: "CPSC 425",
      // description: "stuffgoeshere" },
  ]};

  // sortByName called in constructor
  progLangs: ProgramLanguage = new ProgramLanguage();

  //  endof.educationComponentData
  /// =======================================================
  /// =======================================================
  //  clientfunctions


  // this.simpleDialog.open(SimpleDialog, {data: data}).afterClosed().subscribe(data => {

  //  }
  // });


  //  endof.clientfunctions
  /// =======================================================
  /// =======================================================
  //  localStorage



  /// =======================================================
  /// =======================================================
  //  testHTTP
  // baseUrl = 'http://angularfront/api';

  // this.http.post(`${this.baseUrl}/addone`, {}).subscribe(data => {
  //   console.log(data);
  // });

  // this.http.get(`${this.baseUrl}/getsearch`, { context: filter }).subscribe(data => {
  //   console.log(data);
  // })


  //  endof.testHTTP
  /// =======================================================
  /// =======================================================
  //  clientfunctions


  // this.simpleDialog.open(SimpleDialog, {data: data}).afterClosed().subscribe(data => {

  //  }
  // });


  //  endof.clientfunctions
  /// =======================================================
  /// =======================================================
  //  localStorage

  updatelocalstorage() {
    const settings = {
      // current_user: this.current_user,
      selected_color: this.selected_color,
    };
    localStorage.setItem('portfolio_settings', JSON.stringify(settings));
  }

  //  endof.localStorage
  /// =======================================================
  /// =======================================================
  //  fileIO

  // readCharacter(input: any) {
  //   var file: File = input.files[0];
  //   var reader: FileReader = new FileReader();

  //   reader.onloadend = (e) => {
  //     xml2js.parseString(reader.result!, { explicitArray: false, mergeAttrs: true }, (e, r) => { });
  //   };
  //   reader.readAsText(file);
  // }

  //  endof.fileIO
  /// =======================================================
  /// =======================================================



}

