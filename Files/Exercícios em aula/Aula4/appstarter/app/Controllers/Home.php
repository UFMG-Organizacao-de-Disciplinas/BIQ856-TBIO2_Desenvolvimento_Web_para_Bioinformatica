<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('welcome_message');
    }
    public function livros(): string
    {
        $livros = [
            'O_Senhor_dos_Anéis',
            'Harry_Potter_e_a_Pedra_Filosofal',
            'Dom_Casmurro',
            'A_Moreninha',
            'O_Pequeno_Príncipe',
            '1984',
            'A_Revolução_dos_Bichos',
            'O_Alquimista',
            'A_Metamorfose',
            'O_Cortiço'
        ];
        $data  = [
            'livros' => $livros,
        ];
        return view('page_livros', $data);
    }
}
