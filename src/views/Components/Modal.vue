<template>
  <div>
      <div class="row">
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      Example Modal
                  </div>
                  <div class="card-body">
                      <p>
                          Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.
                      </p>
                      <!-- Button trigger modal -->
                        <tokyo-button color="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-1ss">
                        Launch demo modal
                        </tokyo-button >
                        <!-- Modal -->
                        <tokyo-modal size="md" id="modal-1ss">
                            <template v-slot:modal-header>
                                Header Modal
                            </template>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                        </tokyo-modal>
                  </div>
              </div>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      Variants Modal
                  </div>
                  <div class="card-body">
                      <p>
                          Using <code>type</code> in tokyo-modal component and classic was the default style
                      </p>
                      <!-- Button trigger modal -->
                      <div class="modals">
                        <tokyo-button color="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#classicModal">
                        Default
                        </tokyo-button >

                        <tokyo-button color="danger" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#noticeModal">
                        Notice
                        </tokyo-button >
                      </div>

                        
                        <!-- Modal -->
                        <tokyo-modal size="md" type="classic" id="classicModal">
                            <template v-slot:modal-header>
                                Header Modal
                            </template>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                        </tokyo-modal>

                       
                        <!-- Modal -->
                        <tokyo-modal size="md" type="notice" id="noticeModal">
                            <template v-slot:modal-header>
                                Header Modal
                            </template>
                            <div class="text-center">
                                <h1 style="font-size:3rem">
                                    <i class="fas fa-bell"></i>
                                </h1>
                                <h1 class="font-weight-bold">
                                    Warning!
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos
                                </p>
                            </div>
                            <template v-slot:footer>
                                <tokyo-button color="secondary">Ok, Get it!</tokyo-button>
                                <tokyo-button type="link" style="background:transparent;border:none" data-bs-dismiss="modal" class="ml-auto">Close</tokyo-button>
                            </template>
                        </tokyo-modal>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="card">
                  <div class="card-header">
                      Vertically Centered Modal
                  </div>
                  <div class="card-body">
                      <p>
                          Just add <code>centered</code> in tokyo-modal
                      </p>
                      <!-- Button trigger modal -->
                      <div class="modals">
                        <tokyo-button color="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#vertical">
                        Launch the button
                        </tokyo-button >

                      </div>

                        
                        <!-- Modal -->
                        <tokyo-modal size="md" type="classic" id="vertical" centered>
                            <template v-slot:modal-header>
                                Header Modal
                            </template>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                        </tokyo-modal>

                       
                        <!-- Modal -->
                        <tokyo-modal size="md" type="notice" id="noticeModal">
                            <template v-slot:modal-header>
                                Header Modal
                            </template>
                            <div class="text-center">
                                <h1 style="font-size:3rem">
                                    <i class="fas fa-bell"></i>
                                </h1>
                                <h1 class="font-weight-bold">
                                    Warning!
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos
                                </p>
                            </div>
                            <template v-slot:footer>
                                <tokyo-button color="secondary">Ok, Get it!</tokyo-button>
                                <tokyo-button type="link" style="background:transparent;border:none" data-bs-dismiss="modal" class="ml-auto">Close</tokyo-button>
                            </template>
                        </tokyo-modal>
                  </div>
              </div>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col">
              <tokyo-card
                >
                  <template v-slot:header>
                      Size Modals
                  </template>
                   <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos
                   </p>
                   <div class="modals">
                       <tokyo-button color="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smModal">
                        sm Modal
                        </tokyo-button >

                        <tokyo-button color="secondary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdModal">
                        md Modal
                        </tokyo-button >

                        <tokyo-button color="success" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lgModal">
                        lg Modal
                        </tokyo-button >

                        <tokyo-button color="info" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#xlModal">
                        xl Modal
                        </tokyo-button >
                   </div>
                   
                   <!-- Modals -->
                   <tokyo-modal size="sm" id="smModal">
                            <template v-slot:modal-header>
                                SM Modal
                            </template>
                             <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                    </tokyo-modal>

                    <tokyo-modal size="md" id="mdModal">
                            <template v-slot:modal-header>
                                MD Modal
                            </template>
                             <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                    </tokyo-modal>

                    <tokyo-modal size="lg" id="lgModal">
                            <template v-slot:modal-header>
                                LG Modal
                            </template>
                             <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                    </tokyo-modal>
                    
                    <tokyo-modal size="xl" id="xlModal">
                            <template v-slot:modal-header>
                                XL Modal
                            </template>
                             <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corrupti, quisquam amet consequuntur commodi odio hic delectus optio dignissimos, ipsum sit excepturi iste, inventore perspiciatis? Voluptatum, voluptates beatae? Corrupti, accusamus!
                            </p>
                    </tokyo-modal>
              </tokyo-card>
          </div>
      </div>
  </div>
</template>

<script>
import TokyoButton from '../../components/Button/TokyoButton.vue'
export default {
  components: { TokyoButton },
  
}
</script>

<style>
.modals .btn {
    margin: 0 10px 10px 0;
}
</style>