import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => { this.albums = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}