import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 


interface Post 
{
  title : string;
  content : string; 
}

interface Postid extends Post {
  id : string 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postCollection : AngularFirestoreCollection<Post>;
  posts : any;
  title : string;
  content : string;
  constructor(private afs : AngularFirestore) //dependency injection 
  {

  }

  ngOnInit() 
  {
    //this.postCollection = this.afs.collection('posts');//accesses database here
    this.postCollection = this.afs.collection('posts');
    //this.posts = this.postCollection.valueChanges();
    this.posts = this.postCollection.snapshotChanges()
      .map(actions =>{
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, data}
        }) 
      });
  }

  addPost()
  {
    /*this.afs.collection('posts').add({
      'title' : this.title,
      'content': this.content
    });*/
    this.afs.collection('posts')
    .add({
      'title' : this.title,
      'content' : this.content
    });
  }
}
