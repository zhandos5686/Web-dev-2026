import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
        console.error('Error loading albums:', err);
      }
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (err) => {
          console.error('Error deleting album:', err);
          alert('Failed to delete album. Please try again.');
        }
      });
    }
  }
}