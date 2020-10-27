<template>
    <div class="wrapper">
        <div class="features text-center">
            <div class="info">
                <h3>{{$t('experience')}}</h3>
            </div>
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-50 md-small-size-100">
                    <div class="info">
                        <md-card class="expertise-card">
                            <md-card-header class="md-card-header-info">
                                <slot name="title">
                                    <h4 class="title">{{$t('education')}}</h4>
                                </slot>
                            </md-card-header>

                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2017 - 2020
                                        </div>
                                        <span>{{$t('education1')}}</span>
                                        <p>{{$t('education1_1')}}</p>
                                        <md-card-actions md-alignment="space-between">
                                            <div></div>
                                            <md-card-expand-trigger>
                                                <md-button class="md-simple md-dense">
                                                    {{$t('details')}}
                                                    <md-icon>keyboard_arrow_down</md-icon>
                                                </md-button>
                                            </md-card-expand-trigger>
                                        </md-card-actions>
                                        <md-card-expand>
                                            <md-card-expand-content>
                                                <md-card-content>
                                                    <h6>{{$t('focus')}}</h6>
                                                    <p>{{$t('education1_2')}}</p>
                                                    <md-divider></md-divider>
                                                    <h6>{{$t('education1_3')}}</h6>
                                                    <p>{{$t('education1_4')}}</p>
                                                </md-card-content>
                                            </md-card-expand-content>
                                        </md-card-expand>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                        <md-card class="expertise-card">
                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2008 - 2012
                                        </div>
                                        <span>{{$t('education2')}}</span>
                                        <p>{{$t('education2_1')}}</p>
                                        <md-card-actions md-alignment="space-between">
                                            <div></div>
                                            <md-card-expand-trigger>
                                                <md-button class="md-simple md-dense">
                                                    {{$t('details')}}
                                                    <md-icon>keyboard_arrow_down</md-icon>
                                                </md-button>
                                            </md-card-expand-trigger>
                                        </md-card-actions>
                                        <md-card-expand>
                                            <md-card-expand-content>
                                                <md-card-content>
                                                    <h6>{{$t('focus')}}</h6>
                                                    <p>{{$t('education2_2')}}</p>
                                                    <md-divider></md-divider>
                                                    <h6>{{$t('education2_3')}}</h6>
                                                    <p>{{$t('education2_4')}}</p>
                                                    <p><small>{{$t('education2_5')}}</small></p>
                                                </md-card-content>
                                            </md-card-expand-content>
                                        </md-card-expand>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                        <md-card class="expertise-card">
                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2008
                                        </div>
                                        <span>{{$t('education3')}}</span>
                                        <p>{{$t('education3_1')}}</p>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                    </div>
                </div>


                <div class="md-layout-item md-medium-size-50 md-small-size-100">
                    <div class="info">
                        <md-card class="expertise-card">
                            <md-card-header class="md-card-header-primary">
                                <slot name="title">
                                    <h4 class="title">{{$t('expertise')}}</h4>
                                </slot>
                            </md-card-header>

                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2017 - {{$t('today')}}
                                        </div>
                                        <span>{{$t('expertise1')}}</span>
                                        <p>{{$t('expertise1_1')}}</p>
                                        <md-card-actions md-alignment="space-between">
                                            <div></div>
                                            <md-card-expand-trigger>
                                                <md-button class="md-simple md-dense">
                                                    {{$t('details')}}
                                                    <md-icon>keyboard_arrow_down</md-icon>
                                                </md-button>
                                            </md-card-expand-trigger>
                                        </md-card-actions>
                                        <md-card-expand>
                                            <md-card-expand-content>
                                                <md-card-content>
                                                    <h6>{{$t('tasks')}}</h6>
                                                    <p>{{$t('expertise1_2')}}</p>
                                                    <md-divider></md-divider>
                                                    <div class="table">
                                                        <div class="table-row">
                                                            <div>
                                                                <small>{{$t('august')}} 2019 - {{$t('today')}}</small>
                                                            </div>
                                                            <div>
                                                                <small>
                                                                    <strong>Software Developer</strong><br/>
                                                                    {{$t('expertise1_1')}}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div class="table-row">
                                                            <div>
                                                                <small>{{$t('august')}} 2017 - {{$t('july')}}
                                                                    2019</small>
                                                            </div>
                                                            <div>
                                                                <small>
                                                                    <strong>Agile Java Developer</strong><br/>
                                                                    Sparda Datenverarbeitung eG (SDV-IT)
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </md-card-content>
                                            </md-card-expand-content>
                                        </md-card-expand>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                        <md-card class="expertise-card">
                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2014 - 2017
                                        </div>
                                        <span>{{$t('expertise2')}}</span>
                                        <p>{{$t('expertise2_1')}}</p>
                                        <md-card-actions md-alignment="space-between">
                                            <div></div>
                                            <md-card-expand-trigger>
                                                <md-button class="md-simple md-dense">
                                                    {{$t('details')}}
                                                    <md-icon>keyboard_arrow_down</md-icon>
                                                </md-button>
                                            </md-card-expand-trigger>
                                        </md-card-actions>
                                        <md-card-expand>
                                            <md-card-expand-content>
                                                <md-card-content>
                                                    <h6>{{$t('tasks')}}</h6>
                                                    <p>{{$t('expertise2_2')}}</p>
                                                    <md-divider></md-divider>
                                                    <div class="table">
                                                        <div class="table-row">
                                                            <div>
                                                                <small>{{$t('january')}} 2017 - {{$t('july')}}
                                                                    2017</small>
                                                            </div>
                                                            <div>
                                                                <small>
                                                                    <strong>Expert IT Business Services</strong><br/>
                                                                    {{$t('expertise2_1')}}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div class="table-row">
                                                            <div>
                                                                <small>{{$t('march')}} 2014 - {{$t('december')}}
                                                                    2016</small>
                                                            </div>
                                                            <div>
                                                                <small>
                                                                    <strong>Expert IT Systems Development</strong><br/>
                                                                    Consorsbank, BNP Paribas S.A. Niederlassung
                                                                    Deutschland, ehem. Cortal Consors
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </md-card-content>
                                            </md-card-expand-content>
                                        </md-card-expand>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                        <md-card class="expertise-card">
                            <md-card-content class="text-left">
                                <md-card class="inner-card">
                                    <md-card-content>
                                        <div class="md-subhead">
                                            2013 - 2014
                                        </div>
                                        <span>{{$t('expertise3')}}</span>
                                        <p>{{$t('expertise3_1')}}</p>
                                        <md-card-actions md-alignment="space-between">
                                            <div></div>
                                            <md-card-expand-trigger>
                                                <md-button class="md-simple md-dense">
                                                    {{$t('details')}}
                                                    <md-icon>keyboard_arrow_down</md-icon>
                                                </md-button>
                                            </md-card-expand-trigger>
                                        </md-card-actions>
                                        <md-card-expand>
                                            <md-card-expand-content>
                                                <md-card-content>
                                                    <h6>{{$t('tasks')}}</h6>
                                                    <p>{{$t('expertise3_2')}}</p>
                                                </md-card-content>
                                            </md-card-expand-content>
                                        </md-card-expand>
                                    </md-card-content>
                                </md-card>
                            </md-card-content>
                        </md-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .md-card-actions {
        border: 0 !important;
        margin: 0 !important;
        padding: 0 !important;

        .md-button {
            margin-top: -15px !important;
        }
    }

    .md-divider.expertise-divider {
        margin-top: -10px;
    }

    .md-card.inner-card {
        padding: 0;
        margin: 0;
        border: 0;
        box-shadow: none;

        .md-card-content {
            padding: 0;
            margin: 0;
        }

        .md-card-expand {
            line-height: normal;
            margin-top: -5px;
        }
    }

    .expertise-card {
        margin-bottom: 0;
        margin-top: 8px;

        &:first-child {
            margin-top: 40px;
        }
    }

    .table {
        display: table;

        .table-row {
            display: table-row;

            div {
                padding: 8px;
                display: table-cell;
                align-content: center;
            }
        }
    }
</style>