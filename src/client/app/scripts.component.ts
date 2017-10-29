//import { AceEditorModule } from 'ng2-ace-editor'
import { Component, OnInit } from '@angular/core';
import { Script } from './script';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styles: []
})
export class ScriptsComponent implements OnInit {

  addingScript= false;
  scripts: any = [];
  selectedScript: Script;

  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    this.getScripts();
  }

  cancel() {
    this.addingScript = false;
    this.selectedScript = null;
  }

  deleteScript(script: Script) {
    this.scriptService.deleteScript(script).subscribe(res => {
      this.scripts = this.scripts.filter(h => h !== script);
      if (this.selectedScript === script) {
        this.selectedScript = null;
      }
    });
  }

  getScripts() {
    return this.scriptService.getScripts().subscribe(scripts => {
      this.scripts = scripts;
    });
  }

  enableAddMode() {
    this.addingScript = true;
    this.selectedScript = new Script();
  }

  onSelect(script: Script) {
    this.addingScript = false;
    this.selectedScript = script;
  }

  save() {
    if (this.addingScript) {
      this.scriptService.addScript(this.selectedScript).subscribe(script => {
        this.addingScript = false;
        this.selectedScript = null;
        this.scripts.push(script);
      });
    } else {
      this.scriptService.updateScript(this.selectedScript).subscribe(script => {
        this.addingScript = false;
        this.selectedScript = null;
      });
    }
  }
}
