<?php
$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>
<nav class="NAVBAR">
        <a href="home_path" class="logo">
          <img src="https://static.nowotch.net/img/logo/nowotch-blanc-1030x197-01.png" alt=""
        /></a>
        <div class="nav-right">
        <ul id="menu">
          <li><a class="<?php if($url=='http://localhost/nowotch.ma/'||$url=='http://nowotch.ma.local/') {echo "green";} ?>" href="<?php echo home_path; ?>">HOME</a></li>
            <li><a class="<?php if($url=='http://localhost/nowotch.ma/boxtv/'||$url=='http://nowotch.ma.local/boxtv/') {echo "green";} ?>" href="<?php echo boxtv_path; ?>">BOX TV</a></li>
              <li><a class="<?php if($url=='http://localhost/nowotch.ma/maintenance/'||$url=='http://nowotch.ma.local/maintenance/') {echo "green";} ?>" href="<?php echo maintenance_path; ?>">MAINTENANCE</a></li>
                <li><a class="<?php if($url=='http://localhost/nowotch.ma/4G/'||($url=='http://nowotch.ma.local/4G/')) {echo "green";} ?>" href="<?php echo path_4G; ?>">BOX 4G</a></li>
          <li><a class="<?php if($url=='http://localhost/nowotch.ma/network/'||$url=='http://nowotch.ma.local/network/') {echo "green";} ?>" href="<?php echo network_path; ?>">network</a></li>
       <div class="close"><span></span> <span></span></div>
        </ul>   <a href="#contact"><div class="contact-btn">nous contacter</div></a>
        <div class="menu-icon"><span></span><span></span><span></span></div>
      </div>
      </nav>