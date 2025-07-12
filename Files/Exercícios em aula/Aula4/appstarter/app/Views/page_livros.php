<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to CodeIgniter 4!</title>
    <meta
      name="description"
      content="The small framework with powerful features"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
  </head>
  <body>
    <!-- HEADER: MENU + HEROE SECTION -->
    <header>
      <div class="heroe">
        <h1>LIVROS</h1>
        <?php 
            <!-- $leozin = "Leleo";
            $O_Senhor_dos_Anéis = 1;
            $Harry_Potter_e_a_Pedra_Filosofal = 2;
            $Dom_Casmurro = 3;
            $A_Moreninha = 4;
            $O_Pequeno_Príncipe =";
            $1984 = 5;
            $A_Revolução_dos_Bichos = 6;
            $O_Alquimista = 7;
            $A_Metamorfose = 8;
            $O_Cortiço = 9; -->
        foreach ($livros as $livro){ echo "
        <p>$livro</p>
        <!-- echo "<p>$livro</p>"; -->
        "; } ?>
      </div>
    </header>

    <main>
      <!-- CONTENT -->

      <section>
        <h1>About this page</h1>
      </section>
    </main>
    <!-- FOOTER: DEBUG INFO + COPYRIGHTS -->

    <footer>
      <div class="environment">
        <p>
          Page rendered in {elapsed_time} seconds using {memory_usage} MB of
          memory.
        </p>

        <p>
          Environment:
          <?= ENVIRONMENT ?>
          <?= date('Y') ?>
        </p>
      </div>
    </footer>

    <!-- SCRIPTS -->

    <script {csp-script-nonce}>
      document
        .getElementById("menuToggle")
        .addEventListener("click", toggleMenu);
      function toggleMenu() {
        var menuItems = document.getElementsByClassName("menu-item");
        for (var i = 0; i < menuItems.length; i++) {
          var menuItem = menuItems[i];
          menuItem.classList.toggle("hidden");
        }
      }
    </script>

    <!-- -->
  </body>
</html>
