<template>
    <div class="wrapper">
        <div id="knowledge">
            <div class="info text-center">
                <h3>{{$t('knowledge')}}</h3>
            </div>

            <div class="features text-center">
                <div class="md-layout">
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                        <div class="info">
                            <div class="icon icon-info">
                                <md-icon>star</md-icon>
                            </div>
                            <h4 class="info-title">{{$t('top_skills')}}</h4>
                            <p>{{$t('top_skills_text')}}</p>
                        </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                        <div class="info">
                            <div class="icon icon-success">
                                <md-icon>emoji_people</md-icon>
                            </div>
                            <h4 class="info-title">{{$t('social_skills')}}</h4>
                            <p>{{$t('social_skills_text')}}</p>
                        </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                        <div class="info">
                            <div class="icon icon-danger">
                                <md-icon>favorite</md-icon>
                            </div>
                            <h4 class="info-title">{{$t('current_skills')}}</h4>
                            <p>&#x1F384; {{$t('current_skills_text_1')}}</p>
                            <p>&#x1F999; {{$t('current_skills_text_2')}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md-layout skill-search">
                <div class="md-layout-item md-medium-size-70 md-small-size-100 mx-auto">
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-70 mx-auto">
                            <md-field md-clearable>
                                <md-input :placeholder="$t('search')" v-model="search"/>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-medium-size-30 mx-auto text-center">
                            <md-button class="md-primary md-round" @click="searchOnTable">{{$t('search_button')}}
                                <md-icon>search</md-icon>
                            </md-button>
                        </div>
                    </div>
                </div>
                <div class="md-layout-item md-medium-size-70 md-small-size-100 mx-auto">
                    <md-table class="skill-table" v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
                        <md-table-empty-state
                                md-label="404"
                                :md-description="`Wahrscheinlich kann ich '${search}' nicht. Suchen Sie lieber etwas anderes.`">
                        </md-table-empty-state>

                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell md-sort-by="name">{{ item.name }}</md-table-cell>
                            <md-table-cell md-sort-by="type">{{ item.type }}</md-table-cell>
                            <md-table-cell md-sort-by="top">
                                <badge v-if="item.top">{{ item.top }}</badge>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>
                </div>
            </div>
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
                    name: "JavaScript",
                    type: "Private & Study & Work",
                    top: "Top Skill"
                },
                {
                    name: "Angular, AngularJS",
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
                    type: "Study & Private"
                },
                {
                    name: "User Experience (UX)",
                    type: "Study"
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
                    name: "Adobe Photoshop",
                    type: "Private",
                    top: "Top Skill"
                },
                {
                    name: "Adobe Illustrator",
                    type: "Private",
                    top: "Top Skill"
                },
                {
                    name: "Adobe Creative Cloud (CC)",
                    type: "Private"
                },
                {
                    name: "Unity3D / Unity2D",
                    type: "Private"
                },
                {
                    name: "C#",
                    type: "Study & Private"
                },
                {
                    name: "Agile Process Methods (Scrum, Kanban)",
                    type: "Work",
                    top: "Top Skill"
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