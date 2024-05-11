<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('o_name')->nullable();
            $table->string('lastname');
            $table->string('s_lastname');
            $table->string('email')->unique();
            $table->string('n_identification')->unique();
            $table->foreignId('country_id')
                ->references('id')
                ->on('countries');
            $table->foreignId('area_id')
                ->references('id')
                ->on('areas');
            $table->foreignId('state_id')
                ->references('id')
                ->on('state');
            $table->foreignId('type_identification_id')
                ->references('id')
                ->on('type_identification');
            $table->dateTime('admision_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
