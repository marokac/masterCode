import { Component, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  allowNewServer = false;
  CreateServerSession = 'Server session was not created before';
  name: any;
  manu = [];
  hideManu: boolean = true;
  searchBusy: boolean = false;
  manuOpen: boolean = false;
  cartData: any = { itemNum: "5", value: "My Cart" };
  public fixed: boolean = false;
  searchForm: any;
  constructor(@Inject(DOCUMENT) private doc: Document, private formBuilder: FormBuilder, public dialog: MatDialog ) {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  onCreateServerSession() {
    this.CreateServerSession = 'Server session is created';
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let num = this.doc.body.scrollTop;
    if (num > 50) {
      this.fixed = true;
    } else if (this.fixed && num < 5) {
      this.fixed = false;
    }
  }

  ngOnInit() {
    this.name = "Cedric";

    ///i open the dilog here onit, you can open it by pressing a button or anywhere.
    this.openDialog();
    //change data with real ones
    this.manu.push( { value: "Home",routerLink:"home" }, { value: "Login",routerLink:"login" }, 
    { value: "Register" ,routerLink:"app-addproduct"},{value:"Men",routerLink:"men"},{value:"Women",routerLink:"women"},
    {value:"Kids",routerLink:"kids"},{value:"About",routerLink:"about-us"})
    this.formBuilder = new FormBuilder();
    this.searchForm = this.formBuilder.group({
      search: new FormControl('', {}),
    })

  }
  toggleManu() {
    this.hideManu = !this.hideManu;
    this.manuOpen = !this.manuOpen;
  }
  clicItem() {
    this.hideManu = !this.hideManu;
    this.manuOpen = !this.manuOpen;
  }
  search(e) {
    if (e.target.value.trim() !== '')//handle your seach events here
      this.searchBusy = true;
    else
      this.searchBusy = false;
  }

  clearSerch() {
    this.searchForm.controls['search'].setValue('');
    this.searchBusy = false;
  }


////////////////////////////////////
//// use this function to open the dilog, any way in the application
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '350px',
      data: {heading: 'Headring goes here', body: 'this is the body of the dilog, where ever you are in the application if you need a dilog ,add the massage to this part'}
    });
///////////////////////////////////////////////////
//after the dilog is closed the action goes here
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
