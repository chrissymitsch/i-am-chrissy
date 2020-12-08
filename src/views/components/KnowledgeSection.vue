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
                            <div class="icon icon-warning">
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

            <div class="md-layout skill-search" v-if="finishedLoading && skills && skills.length > 0">
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
                    <md-table class="skill-table" v-model="searched" md-sort="name" md-sort-order="asc" md-card
                              md-fixed-header>
                        <md-table-empty-state
                                md-label="404"
                                :md-description="`Skill not found.`">
                        </md-table-empty-state>

                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell md-sort-by="top" class="text-center">
                                <div v-if="item.top" class="icon icon-warning">
                                    <md-tooltip md-direction="top">Top Skill</md-tooltip>
                                    <md-icon>star</md-icon>
                                </div>
                            </md-table-cell>
                            <md-table-cell md-sort-by="name">{{ item.name }}</md-table-cell>
                            <md-table-cell md-sort-by="type" class="skill-type-badges">
                                <span v-for="type in item.type" :key="type">
                                    <badge :type="getBadgeType(type)">
                                        {{type}}
                                    </badge>
                                </span>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
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
        computed: {
            ...mapState('skills', ['skills'])
        },
        data: () => ({
            finishedLoading: false,
            search: null,
            searched: []
        }),
        methods: {
            searchOnTable() {
                this.searched = searchByName(JSON.parse(JSON.stringify(this.skills)), this.search)
            },
            getBadgeType(type) {
                if (type === 'Study') return 'rose';
                if (type === 'Private') return 'info';
                if (type === 'Work') return 'primary';
                return '';
            }
        },
        created() {
            this.$store.dispatch('skills/getSkills').then(() => {
                this.searched = JSON.parse(JSON.stringify(this.skills));
            }).finally(() => {
                this.finishedLoading = true;
            });
        },
    }
</script>

<style lang="scss">

</style>