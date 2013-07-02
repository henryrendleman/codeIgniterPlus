<?php

	/*FOR MAIN INDEX.PHP file
	 * 
	 * * This can be set to anything, but default usage is:
	 *
	 *     development
	 *     testing
	 *     production*/
	$environment = 'development';
	
	/*config.php
	 * 
	 */
	
	$base_url = 'local.example.com';
	
	/*Authentication Helper
	 * 
	 * 
	 */
	$cookie_location = $base_url;
	
	if($environment == 'development'){
		$debug = TRUE;
	}
	else{
		$debug = FALSE;
	}
?>
