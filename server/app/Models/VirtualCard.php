<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VirtualCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'linkedin_url',
        'github_url',
    ];
}
