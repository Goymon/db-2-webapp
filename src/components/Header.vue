<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Property Management</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link tag="li" to="/owner" class="nav-item" active-class="active">
                        <a class="nav-link">Owner</a>
                    </router-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Property
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item"  to="/property" active-class="active">Properties</router-link>
                            <router-link class="dropdown-item"  to="/property-type" active-class="active">Property Types</router-link>
                        </div>
                    </li>
                    <router-link tag="li" to="/tenant" class="nav-item" active-class="active">
                        <a class="nav-link">Tenant</a>
                    </router-link>
                </ul>
            </div>
        </div>
        
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        methods: {

        }
    }
</script>

