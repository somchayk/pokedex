class Api::PokemonsController < ApplicationController

  def index 
    render json: Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update(pokemon_params)
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @pokemon = Pokemon.find(params[:id]).destory
    render json: { message: 'Item Deleted'}
  end


  private 
  def pokemon_params
    params.require(:pokemon).permit(
      :name, :pokemon_type, :level, :moves, :weight, :height)
  end

end
