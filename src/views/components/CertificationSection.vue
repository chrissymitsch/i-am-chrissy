<template>
    <div class="wrapper">
        <div id="certification">
            <div class="info text-center">
                <h3>{{$t('certs')}}</h3>
            </div>
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-50 mx-auto md-small-size-100">
                    <h4 class="title" v-for="(e, i) in 7" :key="i"><i class="fas fa-award"></i> {{$t('cert' + (6-i) + '_title')}}
                        <p>{{$t('cert' + (6-i) + '_description')}}</p></h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        }
    };
</script>
