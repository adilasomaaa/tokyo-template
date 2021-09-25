<template>
  <div>
      <div class="modal modal-tokyo fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div :class="{'modal-dialog':true, 
                'modal-sm': size=='sm', 
                'modal-default':size=='md', 
                'modal-lg':size=='lg',
                'modal-xl':size=='xl',
                'modal-dialog-centered':centered
                }">
                <div :class="{'modal-content':true, 
                    'modal-classic': type=='classic',
                    'modal-notice': type=='notice',
                    }">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <slot name="modal-header">
                            </slot>
                        </h5>
                    </div>
                    <div class="modal-body">
                        <slot/>
                    </div>
                    <div class="modal-footer">
                        <template v-if="hasFooter">
                            <slot name="footer">
                            </slot>
                        </template>
                        <template v-else>
                            <tokyo-button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</tokyo-button>
                            <button type="button" class="btn btn-primary btn-sm">Save changes</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        id: {
            required:true,
            type: String,
            default: 'exampleModal'
        },
        size: {
            required:false,
            default:'md',
            type: String,
        },
        type: {
            required:true,
            default:'classic',
            type: String,
        },
        centered: {
            required:false,
            default:false,
            type:Boolean
        }
    },
    computed: {
        hasFooter() {
            return !!this.$slots.footer
        }
    }
}
</script>

<style>

</style>