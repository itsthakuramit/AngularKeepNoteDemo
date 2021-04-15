import { Component, OnInit } from '@angular/core';
import { title } from 'node:process';
class Note {
  title: string = '';
  desc: string = '';
}

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textbg = "blue";
  noteTittle: string = "";
  noteDesc: string = "";
  notesList: Array<Note> = [];
  note: Note = new Note();

  onChangeText(event: any) {
    if (event.target.name == "txtnote") {
      this.noteTittle = event.target.value;
    }
    else if (event.target.name == "txtdesc") {
      this.noteDesc = event.target.value;
    }
  }

  addNotes() {
    // console.log(this.noteTittle);
    // console.log(this.noteDesc);
    this.note.title = this.noteTittle;
    this.note.desc = this.noteDesc;
    this.notesList.push(this.note);
    console.log(this.notesList);

    this.noteTittle = "";
    this.noteDesc = "";

  }

}
