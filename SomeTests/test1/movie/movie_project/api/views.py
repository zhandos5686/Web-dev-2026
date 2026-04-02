from django.http import JsonResponse
from .models import Movie

# List all movies
def movie_list(request):
    movies = Movie.objects.all().values('id', 'title', 'director', 'year', 'rating')
    return JsonResponse(list(movies), safe=False)

# Get movie by ID
def movie_detail(request, id):
    try:
        movie = Movie.objects.get(id=id)
        data = {
            'id': movie.id,
            'title': movie.title,
            'director': movie.director,
            'year': movie.year,
            'rating': movie.rating
        }
        return JsonResponse(data)
    except Movie.DoesNotExist:
        return JsonResponse({'error': 'Movie not found'}, status=404)