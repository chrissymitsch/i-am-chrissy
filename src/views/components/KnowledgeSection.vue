<template>
    <div class="wrapper">
        <div id="knowledge">
            <div class="info">
                <h3>{{$t('knowledge')}}</h3>
            </div>

            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                        <md-input :placeholder="$t('search')" v-model="search" @input="searchOnTable"/>
                    </md-field>
                </md-table-toolbar>

                <md-table-empty-state
                        md-label="No users found"
                        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
                    <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
                </md-table-empty-state>

                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Skill" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Learned for" md-sort-by="type">{{ item.type }}</md-table-cell>
                    <md-table-cell md-label="" md-sort-by="top"><badge v-if="item.top">{{ item.top }}</badge></md-table-cell>
                </md-table-row>
            </md-table>
        </div>
    </div>
</template>

<script>
    import Badge from "../../components/Badge";

    const toLower = text => {
        return text.toString().toLowerCase()
    };

    const searchByName = (items, term) => {
        if (term) {
            return items.filter(item => toLower(item.name).includes(toLower(term)))
        }

        return items
    };

    export default {
        components: {Badge},
        data: () => ({
            amount: 30,
            amount2: 60,
            buffer: 40,

            search: null,
            searched: [],
            users: [
                {
                    name: "Java EE",
                    type: "Study & Work",
                    top: "Top Skill"
                },
                {
                    name: "Angular",
                    type: "Work",
                    top: "Top Skill"
                },
                {
                    name: "Typescript",
                    type: "Work",
                    top: "Top Skill"
                },
                {
                    name: "Vue.js",
                    type: "Study & Private",
                    top: "Top Skill"
                },
                {
                    name: "User Experience (UX)",
                    type: "Study",
                    top: "Top Skill"
                },
                {
                    name: "Gamification",
                    type: "Study",
                    top: "Top Skill"
                },
                {
                    name: "Human-Centered Design",
                    type: "Study",
                    top: "Top Skill"
                },
                {
                    name: "Photoshop",
                    type: "Private",
                    top: "Top Skill"
                },
                {
                    name: "Adobe Creative Cloud (CC)",
                    type: "Private"
                },
            ]
        }),
        methods: {
            newUser() {
                window.alert('Noop')
            },
            searchOnTable() {
                this.searched = searchByName(this.users, this.search)
            }
        },
        created() {
            this.searched = this.users
        }
    }
</script>

<style lang="scss">

</style>