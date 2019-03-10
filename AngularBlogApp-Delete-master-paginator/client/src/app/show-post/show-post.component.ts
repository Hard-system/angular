import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from './show-post.service';
import { Post } from '../models/post.model';
import { CommonService, } from '../service/common.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-post',

  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ ShowPostService ]

})
export class ShowPostComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  public posts : any [];
  public post_to_delete;
   // current page of items
   config: any;

  constructor(private route: ActivatedRoute, private router: Router,
     private showPostService: ShowPostService, private commonService: CommonService) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 1
    };
    this.route.queryParamMap
            .map(params => params.get('page'))
            .subscribe(page => this.config.currentPage = page);

   /*  for (let i = 1; i <= 100; i++) {
      this.posts.push(`item ${i}`);
    } */
  }

  pageChange(newPage: number) {
		this.router.navigate([''], { queryParams: { page: newPage } });
	}

  ngOnInit(){
  	this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  setDelete(post: Post){
    this.post_to_delete = post;
  }

  unsetDelete(){
    this.post_to_delete = null;
  }

  getAllPost(){
  	this.showPostService.getAllPost().subscribe(result => {
  		console.log('result is ', result);
  		this.posts = result['data'];
  	});
  }


  editPost(post: Post){
    this.commonService.setPostToEdit(post);
  }

  deletePost(){
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    })
  }

  isLoggedIn() {
    if(localStorage.getItem('loggedInUser')){
      return true;
    }else{
    return false;
    }
  }
}
