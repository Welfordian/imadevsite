<template>
    <dashboard-layout>
        <div class="row">
            <h1 class="title">Welcome {{ store.user.get('name') }}</h1>
            <dashboard-stat v-bind:data="stats.users" link="/dashboard/users" title="Users" icon="users" size="4"></dashboard-stat>
            <dashboard-stat v-bind:data="stats.posts" link="/dashboard/posts" title="Posts" icon="pencil" size="4"></dashboard-stat>
            <dashboard-stat v-bind:data="stats.files" link="/dashboard/files" title="Files" icon="file" size="4"></dashboard-stat>
            <dashboard-stat v-bind:data="stats.messages" link="/dashboard/messages" title="Messages" icon="envelope" size="12"></dashboard-stat>
        </div>
    </dashboard-layout>
</template>

<script>
    import { Store } from '../stores/SharedStore';
    import { _http } from '../Http';
    import DashboardLayout from "../components/DashboardLayout";

    export default {
      components: {DashboardLayout},
      data() {
            return {
                store: Store,
                stats: {
                    users: false,
                    posts: false,
                    messages: false,
                    files: false
                }
            }
        },

        beforeMount() {
            _http.get('/dashboard/stats')
            .then(function(response){
                this.stats = response.data;
            }.bind(this)).catch(function(error){
                console.error("Couldn't fetch stats", error);
            });
        },
    }
</script>

<style scoped>
    .title {
        margin-top: 0px;
        margin-bottom: 35px;
        margin-left: 15px;
    }
</style>