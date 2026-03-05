import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => { this.photos = data; this.loading = false; },
      error: () => this.loading = false
    });
  }

  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}