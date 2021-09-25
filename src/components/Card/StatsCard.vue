<template>
    <div class="card card-stats">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <h4 class="card-title text-muted mb-0">{{title}}</h4>
                    <span class="h2 font-weight-bold mb-0">{{stats}}</span>
                </div>
                <div class="col-auto">
                    <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                        <i :class="icon"></i>
                    </div>
                </div>
            </div>
                <slot/>
                
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required:true,
            type:String
        },
        stats: {
            required:true,
            type:String
        },
        icon: {
            required: true,
            type:String
        }
    }
}
</script>

<style>

</style>