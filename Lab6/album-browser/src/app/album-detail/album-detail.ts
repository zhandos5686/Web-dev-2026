import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  newTitle = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => { 
        this.album = data; 
        this.newTitle = data.title;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  save() {
    if (this.album) {
      const updatedAlbum = { ...this.album, title: this.newTitle };
      this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
        this.album!.title = this.newTitle;
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.album?.id, 'photos']);
  }
}