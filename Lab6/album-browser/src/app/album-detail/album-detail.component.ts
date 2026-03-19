import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  error: string | null = null;
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album details. Please try again.';
        this.loading = false;
        console.error('Error loading album:', err);
      }
    });
  }

  saveTitle(): void {
    if (!this.album || !this.editedTitle.trim()) return;

    this.saving = true;
    const updatedAlbum = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (updated) => {
        this.album = updated;
        this.saving = false;
      },
      error: (err) => {
        console.error('Error updating album:', err);
        alert('Failed to update album. Please try again.');
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}