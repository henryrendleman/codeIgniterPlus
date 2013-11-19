PHP Framework with Add on's
=================

<h3>Contains the following:</h3>
<strong>Code Ignitor</strong>:  http://ellislab.com/codeigniter - Small footprint framework works well. <br>
<strong>Data Mapper</strong>:  http://datamapper.wanwizard.eu/ - Active Record Type Data work<br>
<strong>Template Library</strong>: - Allows for using a header and footer to keep from having to write and include every time.<br>
<strong>Visual dBug for PHP</strong>: http://dbug.ospinto.com/ - A better visual on what your objects and structures look like
<strong>JavaScript</strong>: jQuery, jQuery UI, font-awesome, Custom form validation
<h2>Non-Standard Code</h2>
<p>These items are not native Code Ignitor, Data Mapper, dBug or the Template.</p>
<ul>
<li>The file /site_config.php It was created to allow the site config to be setup per server and not change in the code.  You should have all server specific variables in this file.</li>
<li>Custom Form in JS is a start for form validation.</li>
</ul>

<h3>Get Started</h3>
  <ol>
  <li>Install LAMP, WAMP, XAMPP or whatever to get PHP, MySQL, Apache 2 running:  http://www.wampserver.com/en/</li>
  <li>download code:  git clone github.com/henryrendleman/codeIgniterPlus</li>
  </ol>
  
<h4>Changing the config files</h4>
<ul>
<li>/site_config.php update $base_url to your site</li>
<li>robots.txt disallows everything, you might want to change that</li>
<li>/application/config/database.php:  update this to to login to your db, username, database and password</li>
</ul>
