/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md75", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md5", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md6", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md19", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md20", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md21", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md22", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md23", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md24", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md27", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md28", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md30", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md31", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md32", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md33", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md34", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md36", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md37", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md38", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md40", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md41", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md42", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md44", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md45", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md46", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md47", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md48", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md49", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md51", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md52", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md53", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md57", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md58", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md59", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.0.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md26", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md29", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md35", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md50", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md54", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md55", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md62", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md63", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md64", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md65", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md66", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md67", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md68", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_hinge_constraint_8cpp.html",
"_object_stream_text_out_8h_source.html",
"_serializable_attribute_8h.html#a1c4e088742cfa4700da8d88eacf5974aa4bbb8f967da6d1a610596d7257179c2b",
"_tracked_vehicle_controller_8cpp.html#a0749145a349e1a00cb3a991296540235",
"class_all_hit_collision_collector.html#a6301883d4dfcfd89e61ac4cd62e5c92a",
"class_body_creation_settings.html#ada70b5de55b8cc6ea9f93e67b0d98227",
"class_box_shape_settings.html#a0c622692b801fef15ec5aaf849cca94c",
"class_character_base_settings.html#af7d10fafd91664c8d175bf04785940f2",
"class_compound_shape.html#ad0a3a145f580f2d8f5fabb2495a8eb7c",
"class_convex_hull_shape_1_1_c_h_s_get_triangles_context.html#afbd620fc52b4916635309d3f7e16338c",
"class_debug_renderer.html#a9bb950c4d28eb5130df08b3050dd5db8",
"class_fixed_constraint_settings.html#a88c2bdb8ffe59b43f61165ab2b6b5909",
"class_i_object_stream_in.html#abb5a026cb41f9d12c7960fe9d3a5882c",
"class_lock_free_hash_map.html#afe0dc35025cb64372c9aef71ee997a0d",
"class_motorcycle_controller.html#a8ef4e6dc7edda1ad1d6219b38c4a8e66",
"class_offset_center_of_mass_shape.html#a928422bd2dd3f8a9ac2107bdf503446e",
"class_point_constraint_part.html#a9b183e233b8fc258ab72f447499c5ad8",
"class_ragdoll.html#af287d5dd184fd0349ba44a279f6cacdf",
"class_scaled_shape.html#ac7caaa3409a215d6b7dd97ef08c1309b",
"class_skeleton_mapper.html#a5438aa5e4ec00c89a000a12db4d4c8d4",
"class_soft_body_shared_settings.html#a4a2fd7676a705063111d0f429d2bdce9",
"class_stream_in_wrapper.html",
"class_triangle.html#ab77028569270c58b230bade2e050f0e8",
"class_vec3.html#a6c6409cad56e4e357f73d43cd719ffe8",
"class_vehicle_controller.html#a0a005727385292dd06ad30398e1eef0a",
"dir_a0f33af92addde396fc27b064c5eb8a9.html",
"md__docs_2_release_notes.html#autotoc_md51",
"struct_compound_shape_1_1_collide_point_visitor.html#adb322db658c73032656a070fad686949",
"struct_physics_update_context_1_1_step_1_1_c_c_d_body.html#ae085ff6f3acdcca6fb1aae40d191bf37"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';