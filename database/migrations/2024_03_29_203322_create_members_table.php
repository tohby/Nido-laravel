<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('phone');
            $table->string('email');
            $table->date('dob');
            $table->string('maritalStatus');
            $table->string('address');
            $table->string('stateOfOrigin');
            $table->string('nextOfKin');
            $table->string('nextOfKinPhone');
            $table->string('occupation')->nullable();
            $table->string('employer')->nullable();
            $table->string('institution')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
