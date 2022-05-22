<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link class="link-a" to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="link-a" to="/decks">
            Decks
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="link-a" to="/profile">
            Profile
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="link-a" to="/settings">
            Settings
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
    header{
        background: #000;
        color: #fff;
        height: 60px;
        nav{
            height:60px ;

            ul{
            height:60px ;

                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;
                margin: 0 auto;
                padding: 0;
                li{

                    margin: 5px 20px;
                   .link-a{
                       color: #fff;
                       text-decoration: none;

                   }
                   .nuxt-link-exact-active{
                     color: red;
                   }
                }
            }
        }
    }
</style>
