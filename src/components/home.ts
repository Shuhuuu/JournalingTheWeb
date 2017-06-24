import m from 'mithril';

function view() {
    return (
    <div>
    <h1>Online Nachrichten</h1>
    <hr noshade size="3" />
    <div class="button-group">
        <button type="button" class="button">Nachrichten</button>
        <button type="button" class="button">Ratgeber</button>
        <button type="button" class="button">Sport</button>
        <button type="button" class="button">Wissen</button>
        <button type="button" class="button">Kultur</button>
        <button type="button" class="button">Unterhaltung</button>
    </div>
    <div class="Spalten">    
        <div class="window1">Nachrichten
            <hr noshade size="1" />
            <br />
            <h2></h2>
        </div>
        <div class="window2">
            <div class="head">Sport</div>
            <hr noshade size="1" />
            <br />
            <h2></h2>
        </div>   
        <div class="window3">
            <div class="head">Ratgeber</div>
            <hr noshade size="1" />
            <h2></h2>
            <br/>
        </div>
        <div class="window4">
            <div class="head">Wissen</div>
            <hr noshade size="1" />
            <h2></h2>
        </div>
        <div class="window5">
            <div class="head">Kultur</div>
        </div>
    </div>
    </div>
    );
}

export const Home = { view };

/*
            <?php
		$xml = file_get_contents('http://www.swr.de/export/rss/swraktuell');
		$object = simplexml_load_string($xml);	
		//print_r($object);
		
		foreach ($object->{'channel'}->{'item'} as $item) {
			//print_r($item);
			echo $item->{'title'};
			echo '<br>';
			echo $item->{'pubDate'};
			echo '<br>';
			echo $item->{'guid'};
			echo '<br>';
			echo $item->{'link'};
			echo '<br>';
			echo '<br>';
		}
		?>
*/


