<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;


class UserController extends Controller
{
    public function signUp(Request $request){
        $this->validate($request, [
            'complet' => 'required',
            'email' =>'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = new User([
            'complet' => $request->input('complet'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'activated' => $request->input('activated')
        ]);

        $user->save();
        return response()->json([
            'message' => 'Le compte a bien été créé',
            'response' => 201
        ], 201);

    }

    public function signIn(Request $request){
        $this->validate($request, [
            'email' =>'required|email',
            'password' => 'required'
        ]);

        $credentials = $request->only('email', 'password');
        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'Identifiants invalides'
                ],401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'Le token ne peut être créé!'
            ], 500);
        }

        return response()->json([
            'token' => $token
        ],200);
    }

    public  function getUserList(){
        $data = User::orderBy('complet', 'asc')->get();
        return response($data, 200);
    }
}