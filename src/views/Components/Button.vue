<template>
    <div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        Example
                    </div>
                    <div class="card-body">
                        <p>
                            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
                        </p>
                        <div class="buttons">
                            <tokyo-button>
                                Primary
                            </tokyo-button>
                            <tokyo-button icon="fas fa-arrow-up">
                                Primary
                            </tokyo-button>
                            <tokyo-button>
                                <i class="fas fa-arrow-up" />
                            </tokyo-button>
                        </div>
                        <div class="buttons">
                            <tokyo-button color="primary">
                                Primary
                            </tokyo-button>
                            <tokyo-button color="secondary">
                                Secondary
                            </tokyo-button>
                            <tokyo-button color="warning">
                                Warning
                            </tokyo-button>
                            <tokyo-button color="success">
                                Success
                            </tokyo-button>
                            <tokyo-button color="danger">
                                Danger
                            </tokyo-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <tokyo-card header="Size Buttons">
                    <div class="buttons">
                            <tokyo-button color="primary" size="sm">
                                Primary
                            </tokyo-button>
                            <tokyo-button color="secondary" size="md">
                                Secondary
                            </tokyo-button>
                            <tokyo-button color="warning" size="lg">
                                Warning
                            </tokyo-button>
                    </div>
                </tokyo-card>
            </div>
            <div class="col">
                <tokyo-card header="Rounded Buttons">
                    <div class="buttons">
                            <tokyo-button rounded color="primary">
                                Primary
                            </tokyo-button>
                            <tokyo-button rounded color="secondary">
                                Secondary
                            </tokyo-button>
                            <tokyo-button rounded color="warning" >
                                Warning
                            </tokyo-button>
                    </div>
                </tokyo-card>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        Outline Buttons
                    </div>
                    <div class="card-body">
                        <p>
                            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
                        </p>
                        <div class="buttons">
                            <tokyo-button variant="outline">
                                Primary
                            </tokyo-button>
                            <tokyo-button color="secondary" variant="outline">
                                Secondary
                            </tokyo-button>
                            <tokyo-button color="warning" variant="outline">
                                Warning
                            </tokyo-button>
                            <tokyo-button color="success" variant="outline">
                                Success
                            </tokyo-button>
                            <tokyo-button color="danger" variant="outline">
                                Danger
                            </tokyo-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>