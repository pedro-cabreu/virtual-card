<?php

namespace App\Http\Controllers;

use App\Models\VirtualCard;
use Illuminate\Http\Request;

class VirtualCardController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'linkedin_url' => 'required|url',
            'github_url' => 'url',
        ]);

        try{

            if(VirtualCard::where('name', $request->name)->exists()){
                return response()->json([
                    'message' => 'Virtual Card already exists',
                ], 409);
            }

            $virtualCard = new VirtualCard();
            $virtualCard->name = $request->name;
            $virtualCard->linkedin_url = $request->linkedin_url;
            $virtualCard->github_url = $request->github_url;
            $virtualCard->description = $request->description;

            $virtualCard->save();

            return response()->json([
                'message' => 'Virtual Card created successfully',
                'data' => $virtualCard
            ], 201);

        } catch (\Exception $e) {   
            return response()->json([
                'message' => 'Error creating virtual card',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($name)
    {
        $virtualCard = VirtualCard::where('name', $name)->first();

        if($virtualCard){
            return response()->json([
                'message' => 'Virtual Card found',
                'data' => $virtualCard
            ], 200);
        } else {
            return response()->json([
                'message' => 'Virtual Card not found',
            ], 404);
        }
    }
}
