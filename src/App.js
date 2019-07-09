import React from 'react';
import './App.css';

class App extends React.Component {
  render = () => {
    return (
      <>
        <header class="header">
          <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
          <div id="navigation" class="navigation">
            <nav>
              <ul>
                <li><a href="/browse">Browse</a></li>
                <li><a href="/myList">My List</a></li>
              </ul>
            </nav>
          </div>
          <form id="search" class="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div class="searchResults"></div>
          </form>
        </header>

        <div class="titleList">
          <div class="title">
            <h1>Action</h1>
            <div class="titles-wrapper">
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg"
                />
                <div class="overlay">
                  <div class="title">Shazam!</div>
                  <div class="rating">7.1/10</div>
                  <div class="plot">
                    A boy is given the ability to become an adult superhero in times of
                    need with a single magic word.
                  </div>
                  <div data-toggled="true" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"
                />
                <div class="overlay">
                  <div class="title">Captain Marvel</div>
                  <div class="rating">7/10</div>
                  <div class="plot">
                    The story follows Carol Danvers as she becomes one of the universe’s
                    most powerful heroes when Earth is caught in the middle of a
                    galactic war between two alien races. Set in the 1990s, Captain
                    Marvel is an all-new adventure from a previously unseen period in
                    the history of the Marvel Cinematic Universe.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/103d4ObBCWbB6PtOOjZ7C1FSpVl.jpg"
                />
                <div class="overlay">
                  <div class="title">Shaft</div>
                  <div class="rating">6.2/10</div>
                  <div class="plot">
                    JJ, aka John Shaft Jr., may be a cyber security expert with a degree
                    from MIT, but to uncover the truth behind his best friend’s untimely
                    death, he needs an education only his dad can provide. Absent
                    throughout JJ’s youth, the legendary locked-and-loaded John Shaft
                    agrees to help his progeny navigate Harlem’s heroin-infested
                    underbelly.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg"
                />
                <div class="overlay">
                  <div class="title">Alita: Battle Angel</div>
                  <div class="rating">6.7/10</div>
                  <div class="plot">
                    When Alita awakens with no memory of who she is in a future world
                    she does not recognize, she is taken in by Ido, a compassionate
                    doctor who realizes that somewhere in this abandoned cyborg shell is
                    the heart and soul of a young woman with an extraordinary past.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/dihW2yTsvQlust7mSuAqJDtqW7k.jpg"
                />
                <div class="overlay">
                  <div class="title">Spider-Man: Far from Home</div>
                  <div class="rating">7.5/10</div>
                  <div class="plot">
                    Peter Parker and his friends go on a summer trip to Europe. However,
                    they will hardly be able to rest - Peter will have to agree to help
                    Nick Fury uncover the mystery of creatures that cause natural
                    disasters and destruction throughout the continent.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="titleList">
          <div class="title">
            <h1>Adventure</h1>
            <div class="titles-wrapper">
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"
                />
                <div class="overlay">
                  <div class="title">Captain Marvel</div>
                  <div class="rating">7/10</div>
                  <div class="plot">
                    The story follows Carol Danvers as she becomes one of the universe’s
                    most powerful heroes when Earth is caught in the middle of a
                    galactic war between two alien races. Set in the 1990s, Captain
                    Marvel is an all-new adventure from a previously unseen period in
                    the history of the Marvel Cinematic Universe.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg"
                />
                <div class="overlay">
                  <div class="title">Alita: Battle Angel</div>
                  <div class="rating">6.7/10</div>
                  <div class="plot">
                    When Alita awakens with no memory of who she is in a future world
                    she does not recognize, she is taken in by Ido, a compassionate
                    doctor who realizes that somewhere in this abandoned cyborg shell is
                    the heart and soul of a young woman with an extraordinary past.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/5tFt6iuGnKapHl5tw0X0cKcnuVo.jpg"
                />
                <div class="overlay">
                  <div class="title">Dumbo</div>
                  <div class="rating">6.5/10</div>
                  <div class="plot">
                    A young elephant, whose oversized ears enable him to fly, helps save
                    a struggling circus, but when the circus plans a new venture, Dumbo
                    and his friends discover dark secrets beneath its shiny veneer.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/dihW2yTsvQlust7mSuAqJDtqW7k.jpg"
                />
                <div class="overlay">
                  <div class="title">Spider-Man: Far from Home</div>
                  <div class="rating">7.5/10</div>
                  <div class="plot">
                    Peter Parker and his friends go on a summer trip to Europe. However,
                    they will hardly be able to rest - Peter will have to agree to help
                    Nick Fury uncover the mystery of creatures that cause natural
                    disasters and destruction throughout the continent.
                  </div>
                  <div data-toggled="false" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="movie">
                <img
                  src="https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
                />
                <div class="overlay">
                  <div class="title">Avengers: Endgame</div>
                  <div class="rating">8.4/10</div>
                  <div class="plot">
                    After the devastating events of Avengers: Infinity War, the universe
                    is in ruins due to the efforts of the Mad Titan, Thanos. With the
                    help of remaining allies, the Avengers must assemble once more in
                    order to undo Thanos' actions and restore order to the universe once
                    and for all, no matter what consequences may be in store.
                  </div>
                  <div data-toggled="true" class="listToggle">
                    <div>
                      <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </>
    );
  }
}

export default App;
